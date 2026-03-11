
<script>
	import { resolve } from "$app/paths";

  let iframe;
  function makeFullscreen() {
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe?.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen(); // Safari
    } else if (iframe?.msRequestFullscreen) {
      iframe.msRequestFullscreen(); // IE11
    }
  }
</script>

<main>
  <iframe
    bind:this={iframe}
    src={resolve("/index.html")}
    width="960"
    height="540"
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