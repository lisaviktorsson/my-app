<script>
// @ts-nocheck


	import { onMount } from 'svelte';
	import { players } from '$lib/players';
	let picker = "red";
	let pokemons = [];
	let doneLoading = false;
	let dots = '';
	let dotInterval;

	// Subscribe to players store
	let playersArray = [];
	const unsubscribe = players.subscribe(value => {
		playersArray = value;
	});


	class Player {
		constructor(name, color, img, attack, speed) {
			this.name = name;
			this.color = color;
			this.img = img;	
			this.attack = attack;
			this.speed = speed;
			this.left = 0;
			this.top = 0;
		}

	// Move player by dx, dy scaled by speed, constrained within 0-450px
	moveBy(dx, dy) {
		this.left = Math.max(0, Math.min(this.left + dx * this.speed, 450));
		this.top = Math.max(0, Math.min(this.top + dy * this.speed, 450));
		}
	}

	let hit = false;
	function checkCollision() {
		const p1 = playersArray[0];
		const p2 = playersArray[1];
		if (!p1 || !p2) return;
		const distance = Math.hypot(p1.left - p2.left, p1.top - p2.top);
		hit = distance < 50;
	}

	const keyMap = {
		66: () => picker = "blue",      // B
		82: () => picker = "red",       // R
		38: () => playersArray[0]?.moveBy(0, -1),  // up
		40: () => playersArray[0]?.moveBy(0, 1),   // down
		37: () => playersArray[0]?.moveBy(-1, 0),  // left
		39: () => playersArray[0]?.moveBy(1, 0),   // right
		87: () => playersArray[1]?.moveBy(0, -1),  // W
		83: () => playersArray[1]?.moveBy(0, 1),   // S
		65: () => playersArray[1]?.moveBy(-1, 0),  // A
		68: () => playersArray[1]?.moveBy(1, 0)    // D
	};

	function onKeyDown(e) {
		const action = keyMap[e.keyCode];
		if (action) {
			e.preventDefault();
			action();
		}
		checkCollision();
		playersArray = [...playersArray]; // Trigger reactivity
	}
	


	// Fetch one pokemon by ID
	async function fetchPokemonById(id) {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			if (!response.ok) return null;
			
			const data = await response.json();
			const attack = data.stats.find(s => s.stat.name === 'attack')?.base_stat || 0;
			const speed = data.stats.find(s => s.stat.name === 'speed')?.base_stat || 0;		
			return {
				name: data.name,
				id: data.id,
				img: data.sprites.front_default,
				attack,
				speed,
				picked: undefined
			};
		} catch (error) {
			console.error(`Failed to fetch pokemon ${id}:`, error);
			return null;
		}
	}

	async function fetchAllPokemon(totalCount ) {
		let allPokemon = [];

		// Process pokemon IDs in batches
		for (let i = 1; i <= totalCount; i ++) {
			let poke = await fetchPokemonById(i);
			allPokemon.push(poke);

		}
		pokemons = allPokemon.filter(p => p !== null);
		doneLoading = true;
		clearInterval(dotInterval);
	}


	onMount(() => {
		// Start dot animation
		let dotCount = 0;
		dotInterval = setInterval(() => {
			dotCount = (dotCount + 1) % 4;
			dots = '.'.repeat(dotCount);
		}, 250);
		
		fetchAllPokemon(200);
	});



	function pick(poke) {
		const alreadySelected = playersArray.some(p => p.name === poke.name);
		if (alreadySelected) return;
		let player = playersArray.find(p => p.color === picker);
		if (!player){
			playersArray.push(new Player("", picker, "", 0, 0));
			player = playersArray[playersArray.length - 1];
		}
		let prevPoke = pokemons.find(p => p.name === player.name);
		if (prevPoke) prevPoke.picked = undefined; 
	
		poke.picked = picker;
		setTimeout(()=> {
				player.name = poke.name;
		player.attack = poke.attack;
		player.speed = poke.speed;
		player.img = poke.img;
		playersArray = [...playersArray];}, 1000);

		pokemons = [...pokemons];

	}

</script>





{#if playersArray.length === 2 && playersArray[0].img && playersArray[1].img}
	
  <aside style="display: flex; justify-content: space-around; margin: 10px 0;">
    {#each playersArray as player}
        <div>
          <strong style="color: {player.color};">{player.name}</strong>
          <p>Attack: {player.attack}</p>
					<p>Speed: {player.speed}</p>
				</div>
    {/each}
    
  </aside>
<main class="game" style="border: solid 1px {hit? "red": "black"};">
	{#each playersArray as player}
		<div class="player" style="left: {player.left}px; top: {player.top}px">
			<img src="{player.img}" alt="{player.name}" width="50" />
		</div>
		
	{/each}
</main>
{:else if !doneLoading}
<main class="loadingView">

	<h1>Loading pokemons{dots}</h1>
</main>

{:else}
<main class="pickerView">
  <h1>Choose players</h1>

	<section class="pokelist">
		{#each pokemons as poke (poke.id)}
		<button on:click={()=>pick(poke)} >
			
			<img style="--color-accent:{picker}; --picked-color:{poke.picked};" src="{poke.img}" alt="{poke.name}" width="100" />
		</button>
		{/each}
	</section>
	<footer>
		<p>Press <span style="color: red;">'R'</span> to select Red player, <span style="color: blue;">'B'</span> to select Blue player</p>

	</footer>
</main>

{/if}


<svelte:window on:keydown|preventDefault={onKeyDown} />



<style>
@import url('https://fonts.cdnfonts.com/css/pokemon-solid');



	.pickerView {
		display: grid;
		grid-template-rows: 2fr 15fr 2fr;
		height: 95vh;
		justify-content: center;
		grid-template-columns: 1fr;
		align-items: center;

	}
	.loadingView {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		height: 95vh;

	}

	.loadingView h1{
		font-size: 1em;
		letter-spacing: 1em;
		margin: auto;
	}

	h1 {
		font-size: 3em;
		font-family: 'Pokemon Solid', sans-serif;
		text-align: center;
		letter-spacing: 0.5em;
	}
	.pokelist {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 10px;
		justify-items: center;
		height: 100%;
		overflow-y: scroll;
	}
	.pokelist img {
		cursor: pointer;
		border: solid 2px var(--picked-color,transparent);
		box-shadow: 0 0 10px var(--picked-color);
		background: radial-gradient(circle,  rgba(0,0,0,0) 0%,  var(--picked-color, transparent) 70%);
	}
	.pokelist  img:hover {
		border: solid 2px var(--color-accent);
		box-shadow: 0 0 10px var(--color-accent);	
	}


	footer{
		display: flex;
		height: 100%;
		justify-content: space-around;
		align-items: center;
		font-size: 2em;
		font-family: 'Pokemon Solid', sans-serif;
		
	}


	.game {
		width: 500px;
		height: 500px;
		border: solid blue 1px;
		margin: 10px auto;
		position: relative;
		overflow: hidden;
	}
	.player {
		width: 50px;
		height: 50px;
		position: absolute;
	}
	</style>
