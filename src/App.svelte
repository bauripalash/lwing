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
    let native_share = false;

    let ShareWA = () =>{
        let url = "whatsapp://send?text=" + document.getElementById("intext").innerHTML;
        window.open(url);
    }

    let ShareClipboard = () =>{
        copyText("intext")
    }

let DesktopShare = (type) =>{
    if (type == "fb"){
        let url = "https://www.facebook.com/sharer/sharer.php?u=https://stupefied-hamilton-257b1c.netlify.com/&quote=" + document.getElementById("intext").innerHTML;
        window.open(url);
    }else if(type=="tw"){
        let url = "https://twitter.com/intent/tweet?text=" + document.getElementById("intext").innerHTML;
        window.open(url);
    }
}

let ShareNative = () =>{
    // console.log('Successful sharex')
    if (navigator.share != undefined) {
        // console.log('Successful sharey')
        navigator.share({
        text: document.getElementById("intext").innerHTML
      });
        // .then(() => console.log('Successful share'))
        // .catch((error) => console.log('Error sharing', error));
    }else{
        if (native_share){
             native_share = false;
             // console.log('Successful sharez')
       }else{
             native_share = true;
             // console.log('Successful share0')
        }
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
        
  }else if(!event.target.matches('#ShareNativeButton')){
    native_share = false;
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
            <div class="text-banner"> lwing </div>
            
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

            <div style="" contenteditable="true" id="intext" class="intext" placeholder="Your Winged Message" > </div>

            <div class="bottomControls">
                <button on:click="{() => ShareWA()}" class="social-button whatsapp"><Whatsapp/></button>
                <button class="social-button clipboard" on:click="{() => ShareClipboard()}" ><Clipboard/></button>
                <div class="dropdown">
                <button class="dropbtn social-button share" id="ShareNativeButton" on:click="{() => ShareNative()}" ><ShareNativeButton/></button>

                {#if native_share}
                <div class="dropdown-content" id="ShareList">
                    <button class="sharebtn facebook" on:click="{() => DesktopShare("fb")}">Facebook</button>
                    <button class="sharebtn twitter" on:click="{() => DesktopShare("tw")}">Twitter</button>
                </div>
                {/if}
                </div>  
            </div>
        </div>
        <Footer/>
    </div>

</div>
