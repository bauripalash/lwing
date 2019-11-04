<script>
	import Footer from './comps/Footer.svelte';
    import Whatsapp from './icons/Whatsapp.svelte';
    import FbMessenger from './icons/FbMessenger.svelte';
    import Clipboard from './icons/Clipboard.svelte';
    import {ord , FONTS , RST , getRandomInt , Convert , hasSelection , getSel} from './transform.js';
    import './turtle.css';


    let TurnBold = () =>{
        RST(FONTS[9]);
        // console.log(getSel());
    }

    let TurnItalic = () =>{
        RST(FONTS[3]);
    }

    let TurnBoldItalic = () =>{
        RST(FONTS[8]);
    }

    let ShareWA = () =>{
        let url = "whatsapp://send?text=" + document.getElementById("intext").innerHTML;
        window.open(url);
    }

// RST(convert(fonts[0] , 'PSLSDH127')
</script>

<style>
[contenteditable=true]:empty:before{
  content: attr(placeholder);
  color: grey;
  font-style: italic;
  display: block; /* For Firefox */
}

.intext{
    min-height: 50px;
    text-align: left;
    padding: 5px;
    max-width: 600px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
}
</style>

<div class="pagebody">

    <div class="main">
        <!-- <img src="./left_wing.svg"><h1> lacewing </h1><img src="./right_wing.svg"> 
        -->
        <img src="./banner.png" alt="lacewing" class="banner">
        <div class="inputcontainer">

            <div class="topControls">
                <button title="Bold" on:click="{() => TurnBold()}">𝐓</button>
                <button title="Italic" on:click="{() => TurnItalic()}">𝑇</button>
                <button title="Bold Italic" on:click="{() => TurnBoldItalic()}">𝑻</button>
            </div>

            <!-- <label for="intext" style="display: none;">Your Message</label> -->
            <!-- <textarea name="intext" id="intext" class="intext" placeholder="Your Winged Message"></textarea> -->
            <div style="" contenteditable="true" id="intext" class="intext" placeholder="Your Winged Message" > </div>

            <div class="bottomControls">
                <button on:click="{() => ShareWA()}" class="social-button whatsapp"><Whatsapp/></button>
                <button class="social-button messenger"><FbMessenger/></button>
                <button class="social-button clipboard"><Clipboard/></button>
            </div>
        </div>
        <Footer/>
    </div>

</div>
