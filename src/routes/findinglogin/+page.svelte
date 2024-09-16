
<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.<".split("");
    let letterslist: Array<{ l: string, left: number, top: number }> = [];
    let username: string = " ";
    let caps=true;
    let container: HTMLElement | null = null;
    
    if(browser || typeof window !== "undefined"){
        container = document.getElementById("container");
    } 
    console.log(container);
    onMount(() => {
        randomizeLetters();
        setInterval(() => {
            randomizeLetters();
        }, 3000);
    });
 


    function getRandomPosition(){
        if(container){
            let randx = Math.floor(Math.random() * container.offsetWidth);
            let randy = Math.floor(Math.random() * container.offsetHeight);
            return {x:randx,y:randy};
        }
        location.reload();
        return {x:Math.floor(Math.random() * 100),y:Math.floor(Math.random() * 100)};

    }
        
    function randomizeLetters(){
        letterslist = [];
        for (let letter of letters) {
                let rand= getRandomPosition();
                letterslist.push({ l: letter, left: rand.x, top: rand.y });
        }
        letterslist = letterslist;
        
    }

    function addLetter(letter:{l:string,left:Number,top:Number}){
        if(letter.l == "<"){
            username = username.substring(0,username.length-1);
        }
        else{
            username+=caps?letter.l:letter.l.toLowerCase();   
        }
        let rand= getRandomPosition();
        letter.left = rand.x; 
        letter.top = rand.y;
        
        letterslist = letterslist;            
    }

  
</script>

<button on:click={()=>caps=!caps} class="btn btn-sm variant-ghost-surface">{caps?"caps":"CAPS"}</button>

<div id="container">
    {#each letterslist as letter}
        <button on:click={()=>addLetter(letter)} class="letter" style="left:{letter.left}px;top:{letter.top}px;"><kbd class="kbd">{caps?letter.l:letter.l.toLowerCase()}</kbd></button>
    {/each}
</div>
<button class="btn btn-sm variant-ghost-surface">Login as {username}</button>

<style>

#container{
        width:100vw;
        height: 70vh;
    }

    .letter{
        position:sticky;
        font-size: 2rem;
        font-weight: bold;
        
    }
</style>