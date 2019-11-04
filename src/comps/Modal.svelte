<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<style>
.modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);

    }

    .modal {
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        width: calc(100vw - 1em);
        max-width: 32em;
        max-height: calc(100vh - 4em);
        overflow: auto;
        /*transform: translate(-50%,-50%);*/
        padding: 1em;
        border-radius: 16px;
        background: white;

         animation-name: slideIn;
        animation-duration: 0.4s

    }

    button {
        display: block;
        width: 80%;
        margin:auto;
    }


@-webkit-keyframes slideIn {
  from {bottom: -300px; opacity: 0} 
  to {bottom: 0; opacity: 1}
}

@keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}
</style>

<div class='modal-background' on:click='{() => dispatch("close")}'></div>

<div class='modal'>
    <div class="modal-content">
    <slot name='header'></slot>
    <hr>
    <slot name="body"></slot>
    <hr>
    <div class="button-close">
        <button on:click='{() => dispatch("close")}'>Close</button>
    </div>
    </div>
</div>
