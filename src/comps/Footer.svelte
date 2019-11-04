<script>
import Modal from './Modal.svelte';
let showAboutModal = false;
let showCreditsModal = false;
</script>

<style>
.modal-header{
    color:#0e2877;
}

.modal-body{
    color: #0e2877
}

.link-button{
    cursor: pointer;
}

.link-button:hover{
    text-decoration: none;
    font-weight: bolder;
}

</style>

<footer>
<p class="small-text"> 🇮🇳 Handcrafted by Palash Bauri 👻 </p>
<p class="credit-text">| <a class="link-button" on:click="{() => showAboutModal = true}">About</a> | <a class="link-button" on:click="{() => showCreditsModal = true}">Credits</a> |</p>
</footer>

{#if showAboutModal}
    <Modal on:close="{() => showAboutModal = false}">
        <h2 class="modal-header" slot="header">
            About!
        </h2>

        <div class="modal-body" slot="body">   
            
            
        </div>

        
    </Modal>
{/if}

{#if showCreditsModal}
    <Modal on:close="{() => showCreditsModal = false}">
        <h2 class="modal-header" slot="header">
            Credits!
        </h2>

        <div class="modal-body" slot="body">   
            <ul>
                <li> Social Messaging App Icons from <a href="https://icons8.com">ICONS8</a> </li>
            </ul>
            
        </div>

        
    </Modal>
{/if}


