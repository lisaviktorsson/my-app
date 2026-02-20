<script>
  let nrCols = 8 , nrRows = 10
const gates = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd2pAU62ZFD-04jINIsNb9IPDAMpMrh7vzg&s",
  "https://thumb.ac-illust.com/8c/8cd4207d6c1836231902d7dae2d7cdda_t.jpeg"
] 
  const obstacles = [ 
    "https://i.pinimg.com/564x/fc/54/da/fc54da297deca999e45ee04dbbbf5a23.jpg",
    "https://www.creativefabrica.com/wp-content/uploads/2021/12/28/1640679036/Pixel-art-wolf.jpg",
     "curling_.png"
    ]
  let obstacleChance = 0.95, minGateDistance = 15
  let grid = []
  let gameover = false, game = false, timer = 3
  let skiier = {row: 2, col:5,img: "alpine.png"}
  let dx = 0, dy = 0, score = 0, currentGate = 0, currentGateDistance = 0, interval



  function startGame(time){
    obstacleChance = 0.95, minGateDistance = 15, dx = 0
    dy = 0, currentGate = 0, currentGateDistance = 30 // wait with first gate
    timer = time
    grid = generateRows(nrCols*nrRows, obstacleChance)
    let startInterval = setInterval(()=>{
          timer -= 1
          if(timer <0)
            clearInterval(startInterval)
          
    },1000)
    setTimeout(()=>{
        interval = setInterval(update,200)
        game = true
        gameover = false
        score = 0

      }, timer*1000)
  }
  startGame(timer)

  function randomTileImg(chance){
    return Math.random() > chance ? obstacles[Math.floor(Math.random() * obstacles.length)]: "" 
  }

  function generateRows(nr,chanceOfObstacles){
    return new Array(nr).fill(undefined).map(u =>
      ({img: randomTileImg(chanceOfObstacles) }))
  }


	function onKeyDown(e) {
   	// up = 38
    // down = 40
    // right = 39
    // left = 37
		 switch(e.keyCode) {
			 case 40:
				 dy= 1;
				 break;
			 case 37:
				 dx = -1;
				 break;
			 case 39:
				 dx = 1;
				 break;
		 }
	}

  function gameOver(){
     dy = 0
     gameover = true
     clearInterval(interval) 
     setTimeout(()=>{ game = false; startGame(3);}, 1000)
  }

  function checkCollision(){
     // skiier at idx: skiier.row * nrCols to skiier.row * nrCols + nrCols
    let skiierRow = grid.slice(nrCols*skiier.row,nrCols*skiier.row+nrCols)
    let gateIdx = skiierRow.findIndex(g => gates.includes(g.img))
    if (gateIdx != -1){
      if (gateIdx<skiier.col && skiierRow[gateIdx].img == gates[0] ||
        gateIdx>skiier.col && skiierRow[gateIdx].img == gates[1]
      )
        gameOver()
      else
        score++
      if (score% 10==0){
        obstacleChance *=0.95
        minGateDistance--
      }
    }
  }
  

  function moveSkiier(){
    skiier.col = Math.max(0, Math.min(nrCols-1, skiier.col + dx))
  }

  function updateGrid(){
     if(!gameover){
      let row = grid.splice(0,nrCols)
      // maybe add obstacles
      row.forEach(tile => {
          tile.img = randomTileImg(obstacleChance)
      })
      // atleast 15 tiles space between gates
      if (currentGateDistance > minGateDistance){
        // make sure gate is not at edge
        let idx = 1 + Math.floor(Math.random()*(nrCols-2))
        // 50% chance of gate
        if (Math.random() > 0.5){
          currentGateDistance = 0
          row[idx].img = gates[currentGate]
          currentGate = 1 - currentGate // 0 = left (blue), 1 = right (red)
        }
      }
      currentGateDistance++
      grid = [...grid, ...row ]
    }
  }

  function update(){
    checkCollision()
    moveSkiier()
    updateGrid()
  }
  






</script>
<svelte:window on:keydown|preventDefault={onKeyDown} />


{#if game}
<main style="--cols:{nrCols}; --rows:{nrRows};">
  {#each grid as tile,i}
    <div class="tile" style="--pic:url({ tile.img});">
      <!--{i}-->
      {#if (skiier.col + skiier.row*nrCols) == i}
        <img src={skiier.img} alt="alpine 'skiier'">
      {/if}
    </div>
   
  {/each}
</main>

{:else if gameover}
  <section class="screen">
    <h1 class="timer">Big sad, start in {timer}</h1>
    <img alt="gif-crying" src="https://photo.znews.vn/Uploaded/hurohuo/2026_02_11/NorskOS_intervjutogenovntadvndnin..._ezgif.com_crop.gif">
  </section>
  {:else}
<section class="screen">
  <h1 class="timer">Start in {timer}</h1>
  <p>
    Go left of <span style="color:blue;">blue</span> gates and right of <span style="color:red;">red</span> gates.
  </p>
  <div class="superg">
    <img alt="super g" src="https://cdn.dribbble.com/userupload/22033108/file/original-e4362f6fa4b5cfd53d47d2523fd7d210.gif">
  </div>
</section>
  {/if}
{#if game || gameover}
<footer>
  <span style="color:blue;">Left </span>
  <h1>
  Score: {score}</h1>
    <span style="color:red;">Right </span>

</footer>
{/if}


<style>

  .superg{
    max-height: 50vh;
  }

  .screen{
        margin: auto;
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 70vh;

  }
	main {
    
		width: 50vw;
		height: 80vh;
		margin: 10px auto;
		position: relative;
    display: grid;
    grid-template-columns: repeat(var(--cols),1fr);
    grid-template-rows: repeat(var(--rows),1fr);
    background-color: white;

	}
  footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 10vh;
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .tile img{
    z-index: 10;
    position: absolute;
  }
  
  h1{
    font-size: 3em;
    text-align: center;
  }
 
	.tile { 
    position: relative;
    width: 100%;
    height: 100%;
		background-image:  var(--pic) ;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
	}
</style>