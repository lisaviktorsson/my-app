
<script>

  let iframe;
  let innerWidth = 0
	let innerHeight = 0
	let aspect = 1.78
  $: gameWidth = Math.round(innerWidth / 1.5)
  $: gameHeight = Math.round(gameWidth / aspect)

  
  function makeFullscreen() {
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe?.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen(); // Safari
    } else if (iframe?.msRequestFullscreen) {
      iframe.msRequestFullscreen(); // IE11
    }
  }
  function handleKeys(e) {
    if (e.keyCode == 27)
      document.exitFullscreen()
  }
  

  
</script>

<svelte:window bind:innerWidth bind:innerHeight on:keydown={handleKeys}/>

<main>
  <iframe
    bind:this={iframe}
    src="game/index.html"
    width="{gameWidth}"
    height="{gameHeight}"
    allow="fullscreen"
    allowfullscreen
    style="border: none;"
  ></iframe>

  <button on:click={makeFullscreen}>Go Fullscreen</button>
</main>

<style>
  main{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    justify-content: space-evenly;
  }


</style>