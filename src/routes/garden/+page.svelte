
<script lang="ts">
import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
import { onMount } from 'svelte';

let tileSize = 0;




let panel = [{name:"Planering", icon:"https://cdn-icons-png.flaticon.com/512/1518/1518965.png"}, {name:"Växter",icon:"https://cdn-icons-png.flaticon.com/512/427/427503.png"}, {name:"Inställningar",icon:"https://cdn-icons-png.flaticon.com/512/900/900834.png"}]
let currentPanel: {name:String, icon:String} = panel[0];


let currentTile = {name: "empty", icon: "white", minSize:1};
let tiles = {"Planering": [{name: "Sten", icon: "grey", minSize:1}, {name:"Gräs", icon:"green", minSize:1}, {name:"PallKrage", icon:"brown",minSize: 12}], "Växter": [{name: "Ros", icon: "red", minSize:1}, {name:"Tulpan", icon:"yellow", minSize:1}], "Inställningar": [{name: "Spara", icon: "blue", minSize:1}, {name:"Ladda", icon:"purple", minSize:1}]}
let size = 64;
let garden:Array<Array<{name:String,icon:String,minSize:number}>> = [];
for (let i = 0; i < size; i++) {
  let row = Array(size).fill({name:"empty", icon:"white"});
  garden.push(row);
}

let isDrawing = false;

function resetGarden(){
  garden = [];
  for (let i = 0; i < size; i++) {
    let row = Array(size).fill({name:"empty", icon:"white"});
    garden.push(row);
  }
garden = garden;
}

function handleMouseDown() {
    isDrawing = true;
  }

  function handleMouseUp() {
    isDrawing = false;
  }




function handleMouseOver( i:number, j:number, draw: boolean){
  if (!draw) return;
  if (currentTile.minSize > size - i || currentTile.minSize > size - j) return;

  for (let row = 0; row < currentTile.minSize; row++) {
    for (let col = 0; col < currentTile.minSize; col++) {
        garden[i+row][j+col] = currentTile;
      }
    }
  
  
  garden = garden;
}


let m = { x: 0, y: 0 };

function handleMousemove(event) {
  m.x = event.clientX;
  m.y = event.clientY;
}


onMount(() => {
  tileSize = document.getElementsByClassName("slot")[0].getBoundingClientRect().width;
  console.log(tileSize);
})

</script>


<div class="container" >

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" ><img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png" alt="home icon"></AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
  {#each panel as item, i}
	<AppRailTile bind:group={currentPanel} name="tile-1" value={item} title={item.name}>
		<svelte:fragment slot="lead">
      <img src={item.icon} alt="{item.name} icon" />
    </svelte:fragment>
		<span>{item.name}</span>
	</AppRailTile>

{/each}

</AppRail>

<!--AppRail info-->
<div class="bg-surface-900">
  <button on:click={resetGarden}>Reset</button>
  <h1>{currentPanel.name}</h1>
  <h4>{currentTile.name}</h4>
  <div class="grid grid-cols-3 grid-rows-5 gap-4">
    {#each tiles[currentPanel.name] as tile, i}
      <div class="bg-surface-600 p-4 rounded-lg" on:click={() => {currentTile = tile}} >
        <span>{tile.name}</span>
        <div class="rounded" style="background-color:{tile.icon}; height:50%;"></div>
      </div>
    {/each}
  </div>
</div>


<!--Garden preview-->
<div style="position:absolute; left:{m.x}px; top:{m.y}px; z-index:1000; background-color:{currentTile.icon}; border:1px solid black; padding:1em; width:{tileSize}px; height:{tileSize}px;">
  </div> 


<!--Garden plan-->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div style="--gardenSize:{size};" class="bg-surface-400 garden" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mousemove={handleMousemove} >
  {#each garden as row, rowIndex}
    {#each row as tile, colIndex}
      <div class="slot" style="background-color:{tile.icon};"  on:focus={() => handleMouseOver(rowIndex, colIndex, isDrawing)}  on:mouseover={() => handleMouseOver(rowIndex, colIndex, isDrawing)} on:click={()=>handleMouseOver(rowIndex, colIndex,true)} on:keypress={()=>handleMouseOver(rowIndex, colIndex,true)}>
      </div>
    {/each}
  {/each}


</div>

<div class="bg-surface-600">

</div>




</div>





<style>

.container {
  display: grid;
  grid-template-columns: 1fr 4fr 8fr 4fr;
  min-width: 100vw;
  height: 100%;
  grid-gap: 1em;
}

.garden{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(var(--gardenSize), 1fr);
  grid-template-columns: repeat(var(--gardenSize), 1fr);
  
}

.garden div {
  height: 100%;
  width: 100%;
  border-width: 1px;
  border-color:  black;
  border-style: dashed;
  
}


.container div {
  height: 100%;
  width: 100%;
}

</style>