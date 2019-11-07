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
    color: rgb(0,100,200);
    text-decoration: none;
    display: inline-block;
}

.link-button:hover{
    text-decoration: none;
    font-weight: bolder;
}


</style>

<footer>
<p class="small-text"> 🇮🇳 Handcrafted by Palash Bauri 👻 </p>
<span class="credit-text">| <p class="link-button" on:click="{() => showAboutModal = true}">About</p> | <p class="link-button" on:click="{() => showCreditsModal = true}">Credits</p> |</span>
<div class="screw-head-icons-footer">
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="5" fill="#05c46b" />
                </svg>
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="5" fill="#B33771" />
                </svg>
            </div>
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


