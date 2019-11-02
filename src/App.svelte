<script>
	import Footer from './comps/Footer.svelte';
    import Whatsapp from './icons/Whatsapp.svelte';
    import FbMessenger from './icons/FbMessenger.svelte';
    import Clipboard from './icons/Clipboard.svelte';
    import './turtle.css';
</script>

<style>

</style>

<div class="pagebody">

    <div class="main">
        <h1> lacewing </h1>
        <!-- <hr> -->
        <div class="inputcontainer">
            <div class="topControls">
                <button>Hello</button>
            </div>
            <textarea class="intext"></textarea>
            <div class="bottomControls">
                <button class="social-button whatsapp"><Whatsapp/></button>
                <button class="social-button messenger"><FbMessenger/></button>
                <button class="social-button clipboard"><Clipboard/></button>
            </div>
        </div>
        <Footer/>
    </div>

</div>
