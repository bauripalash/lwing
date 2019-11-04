<script>
	import Footer from './comps/Footer.svelte';
    import Whatsapp from './icons/Whatsapp.svelte';
    import FbMessenger from './icons/FbMessenger.svelte';
    import Clipboard from './icons/Clipboard.svelte';
    import {ord , FONTS , RST , getRandomInt , Convert , hasSelection , getSel} from './transform.js';
    import './turtle.css';


    let TurnBold = () =>{
        RST(FONTS[0])
        // console.log(getSel());
    }

// RST(convert(fonts[0] , 'PSLSDH127')
</script>

<style>

</style>

<div class="pagebody">

    <div class="main">
        <!-- <img src="./left_wing.svg"><h1> lacewing </h1><img src="./right_wing.svg"> 
        -->
        <img src="./banner.png" alt="lacewing" class="banner">
        <div class="inputcontainer">

            <div class="topControls">
                <button title="Bold" on:click="{() => TurnBold()}">𝐓</button>
                <button title="Italic">𝑇</button>
                <button title="Bold Italic">𝑻</button>
            </div>

            <textarea id="intext" class="intext"></textarea>

            <div class="bottomControls">
                <button class="social-button whatsapp"><Whatsapp/></button>
                <button class="social-button messenger"><FbMessenger/></button>
                <button class="social-button clipboard"><Clipboard/></button>
            </div>
        </div>
        <Footer/>
    </div>

</div>
