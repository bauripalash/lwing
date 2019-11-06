<script>
	import Footer from './comps/Footer.svelte';
    import Whatsapp from './icons/Whatsapp.svelte';
    import FbMessenger from './icons/FbMessenger.svelte';
    import Clipboard from './icons/Clipboard.svelte';
    import ShareNativeButton from './icons/ShareNativeButton.svelte';
    import {FONTS , RST ,  copyText} from './transform.js';
    import './turtle.css';

    let office_visible = false; 
    let casual_visible = false;
    let frakur_visible = false;

    let ShareWA = () =>{
        let url = "whatsapp://send?text=" + document.getElementById("intext").innerHTML;
        window.open(url);
    }

    let ShareClipboard = () =>{
        copyText("intext")
    }

let ShareNative = () =>{
    if (navigator.share) {
    navigator.share({
          title: 'Web Fundamentals',
        text: 'Check out Web Fundamentals — it rocks!',
        url: 'https://developers.google.com/web',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }

}

let Show_Office = () =>{
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
                    <button on:click="{() => Format(0)}">𝙽𝚘𝚛𝚖𝚊𝚕</button>
                    <button on:click="{() => Format(8)}">𝐁𝐨𝐥𝐝</button>
                    <button on:click="{() => Format(7)}">𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄</button>
                    
                </div>
                {/if}
                </div>

                <div class="dropdown">
                <button class="dropbtn" on:click="{() => Show_Casual()}">𝖢𝖺𝗌𝗎𝖺𝗅
                    &#9660;
                </button>
                {#if casual_visible}
                <div class="dropdown-content" id="CasualList">
                    <button on:click="{() => Format(4)}">𝖭𝗈𝗋𝗆𝖺𝗅</button>
                    <button on:click="{() => Format(3)}">𝗕𝗼𝗹𝗱</button>
                    <button on:click="{() => Format(2)}">𝘐𝘵𝘢𝘭𝘪𝘤</button>
                    <button on:click="{() => Format(1)}">𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘</button>
                </div>
                {/if}
            </div>

                <div class="dropdown">
                <button class="dropbtn" on:click="{() => Show_Frakur()}">ℭ𝔩𝔞𝔰𝔰𝔦𝔠
                    &#9660;
                </button>
                {#if frakur_visible}
                <div class="dropdown-content" id="FrakurList">
                    <button on:click="{() => Format(9)}">𝔑𝔬𝔯𝔪𝔞𝔩</button>
                    <button on:click="{() => Format(5)}">𝕭𝖔𝖑𝖉</button>
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
                <button class="social-button clipboard" on:click="{() => ShareClipboard()}" ><Clipboard/></button>
                <button class="social-button share" on:click="{() => ShareNative()}" ><ShareNativeButton/></button>
            </div>
        </div>
        <Footer/>
    </div>

</div>
