<script>
  let flipped = false;


  async function flipCoin() {
		let times = Math.floor(Math.random() * 10) + 1;
		for (let i = 0; i < times; i++) {
			flipped = !flipped;
			
			await new Promise((r) => setTimeout(r,250));
			
		};
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="coin" on:click={flipCoin} on:keypress={flipCoin} class:flipped={flipped} class:not-flipped={!flipped}>
  <div class="side front">Heads</div>
  <div class="side back">Tails</div>
</div>

<style>
  .coin {
    width: 100px;
    height: 100px;
    perspective: 1000px;
    cursor: pointer;

  }
  .side {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    border: 2px solid #333;
  }
  .front {
    background: gold;
    transform: rotateY(0deg);
  }
  .back {
    background: silver;
    transform: rotateY(180deg);
  }
  .flipped .front {
    animation: flip-front 250ms forwards;
  }

	.not-flipped .back{
		animation: flip-front 250ms forwards;
	}
	.not-flipped .front{
		animation: flip-back 250ms forwards;
	}
  .flipped .back {
    animation: flip-back 250ms forwards;
  }
  @keyframes flip-front {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(180deg); }
  }
  @keyframes flip-back {

		from { transform: rotateY(180deg); }
    to { transform: rotateY(0deg); }
  }


</style>
