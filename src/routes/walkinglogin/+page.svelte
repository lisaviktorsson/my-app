<script>
	import { onMount } from "svelte";

let username = "placeholder"
let letters = "ABCDEGHIJKLIMNOPQRSTUVXYZÅÄÖ<"
let currentLetter = {left:0,bottom:0, idx:0}

let blockLeft = Math.random()*100
let jump = false


function changeLetter(){
  currentLetter.left = 0
  currentLetter.idx < letters.length ? currentLetter.idx ++ : currentLetter.idx = 0
  blockLeft = Math.random()*100
}



function updateLetter(){
  if(currentLetter.left > 100 ){
   
    changeLetter()
  }
  currentLetter.left ++
  if (Math.abs(currentLetter.left - blockLeft) < 7 && jump){
    username+= letters[currentLetter.idx]
    changeLetter()
  }
}

function hideButton(){
  let button = document.getElementById("hide")
  button.style.left = Math.random()*100 +'vw'
  button.style.top = Math.random()*20 +'vh'
  username = username.slice(0,username.length-1)

}

onMount(()=>{ setInterval(()=>{
    updateLetter()
  },200)

  document.addEventListener("keypress", (e) => 
    {if (e.key == " "){
      jump = true;
      setTimeout(()=>{
        jump = false;
      },150)
    }
  })
}
)




</script>


<h1>User: {username}</h1>




<section id="ground">

<aside class="inputblock" style="--inputleft:{blockLeft}vw;"></aside>
<aside class:jump={jump} class="ghost"  style="--left:{currentLetter.left}vw; --bottom:{currentLetter.bottom}vh;">
  <p  class="letter">
    {letters[currentLetter.idx]}
  </p>
</aside>
</section>
<section class="grass">
  <div id="hide" on:click={hideButton}>

  </div>

</section>



<style>

  .grass{
    height: 25vh;
    background-color: rgb(9, 72, 41);
    
    position: relative;
  }
  .jump{
    transform: translateY(-40px);
    transition: transform ease-in 100ms;
  }


  .inputblock{
    height: 100px;
    width: 7vw;
    background-image: url("ghostbuster.webp");
    background-size: contain;
    background-repeat: no-repeat;
    bottom: 60px;
    left:var(--inputleft);
    position: absolute;
    border-radius: 15%;
  }

  	@keyframes ghost {
		0% {transform: translateY(5px);}
		25% {transform: translateY(0px);}
		50% {transform: translateY(5px);}
		75% {transform: translateY(0px);}

	}

  .ghost{
     
    position: absolute;
    left: var(--left);
    bottom: var(--bottom);
  }
  .letter{
 animation-name: ghost;
      animation-duration: 1000ms;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    background-image: url("ghost.png");
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25% 15%;
    padding: 30px 30px;
    text-align: center;
    color: black;
    z-index: 5;

  }
  h1{
    text-align: center;
    font-size: xx-large;
    margin: 1em;
  }

    
  #ground{
    border-bottom: 3px  rgb(9, 72, 41) dotted;
    height: 50vh;
    position: relative;
    width: 100vw;
  }

  #hide{
    opacity: 0.01;
    background-image:url("https://cdn-icons-png.flaticon.com/512/3405/3405244.png");
    background-size: contain;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10px;
    left:100px;
    z-index: 3;
  }

  #hide:hover{
    opacity: 1;
  }

</style>


