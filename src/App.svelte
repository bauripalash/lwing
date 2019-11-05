<script>
	import Footer from './comps/Footer.svelte';
    import Whatsapp from './icons/Whatsapp.svelte';
    import FbMessenger from './icons/FbMessenger.svelte';
    import Clipboard from './icons/Clipboard.svelte';
    import {ord , FONTS , RST , getRandomInt , Convert , hasSelection , getSel} from './transform.js';
    import './turtle.css';

    let office_visible = false; 
    let casual_visible = false;
    let frakur_visible = false;

    let ShareWA = () =>{
        let url = "whatsapp://send?text=" + document.getElementById("intext").innerHTML;
        window.open(url);
    }



let Show_Office = () =>{
    // document.getElementById("OfficeList").style.display = "block";
    // RST(FONTS[5])
    if (office_visible){
        office_visible = false;
    }else{
        office_visible = true;
        casual_visible = false;
        frakur_visible = false;
    }
}

let Show_Casual = () =>{
    if (casual_visible){
        casual_visible = false;
    }else{
        casual_visible = true;
        office_visible = false; 
        frakur_visible = false;
    }
}

let Show_Frakur = () =>{
    if (frakur_visible){
        frakur_visible = false;
    }else{
        frakur_visible = true;
        office_visible = false;
        casual_visible = false;
    }
}

let Close_ALL = () =>{
        office_visible = false;
        casual_visible = false;
        frakur_visible = false;
}

let Format = (n) =>{
        // document.getElementById("intext").innerHTML = "T"
        RST(FONTS[n])
        office_visible = false;
        casual_visible = false;
        frakur_visible = false;
    
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
        office_visible = false;
        casual_visible = false;
        frakur_visible = false;
  }
}
</script>

<style>
[contenteditable=true]:empty:before{
  content: attr(placeholder);
  color: grey;
  font-style: italic;
  display: block; /* For Firefox */
  font-size: 12px;
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
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 99999999999;
  font-size: 10px;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

</style>

<div class="pagebody" on:click="">

    <div class="main">
        <!-- <img src="./left_wing.svg"><h1> lacewing </h1><img src="./right_wing.svg"> 
        -->
        <!-- <img src="./banner.png" alt="lacewing" class="banner"> -->
        <div class="banner-container">
            <div class="screw-head-icons">
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="5" fill="#F97F51" />
                </svg>
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="5" fill="#1B9CFC" />
                </svg>
            </div>
            <small class="text-subbanner"> 📱 Text Mate 😻 </small>
            <div class="text-banner"> Lacewing </div>
            
        </div>

        <div class="inputcontainer">

            <div class="topControls">
                
                <div class="dropdown">
                <button class="dropbtn" on:click="{() => Show_Office()}">𝙾𝚏𝚏𝚒𝚌𝚎
                    &#9660;
                </button>
                {#if office_visible}
                <div class="dropdown-content" id="OfficeList">
                    <a on:click="{() => Format(0)}">𝙽𝚘𝚛𝚖𝚊𝚕</a>
                    <a on:click="{() => Format(8)}">𝐁𝐨𝐥𝐝</a>
                    <a on:click="{() => Format(7)}">𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄</a>
                    
                </div>
                {/if}
                </div>

                <div class="dropdown">
                <button class="dropbtn" on:click="{() => Show_Casual()}">𝖢𝖺𝗌𝗎𝖺𝗅
                    &#9660;
                </button>
                {#if casual_visible}
                <div class="dropdown-content" id="CasualList">
                    <a on:click="{() => Format(4)}">𝖭𝗈𝗋𝗆𝖺𝗅</a>
                    <a on:click="{() => Format(3)}">𝗕𝗼𝗹𝗱</a>
                    <a on:click="{() => Format(2)}">𝘐𝘵𝘢𝘭𝘪𝘤</a>
                    <a on:click="{() => Format(1)}">𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘</a>
                </div>
                {/if}
            </div>

                <div class="dropdown">
                <button class="dropbtn" on:click="{() => Show_Frakur()}">ℭ𝔩𝔞𝔰𝔰𝔦𝔠
                    &#9660;
                </button>
                {#if frakur_visible}
                <div class="dropdown-content" id="FrakurList">
                    <a on:click="{() => Format(9)}">𝔑𝔬𝔯𝔪𝔞𝔩</a>
                    <a on:click="{() => Format(5)}">𝕭𝖔𝖑𝖉</a>
                </div>
                {/if}
            </div>
                
                <button on:click="{() => Format(6)}">𝓱𝓪𝓷𝓭𝔀𝓻𝓲𝓽𝓲𝓷𝓰 
                    
                </button>

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
