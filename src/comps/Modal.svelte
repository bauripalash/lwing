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
        position: absolute;
        border-radius: 16px;
        left: 50%;
        top: 50%;
        width: calc(100vw - 4em);
        max-width: 32em;
        max-height: calc(100vh - 4em);
        overflow: auto;
        transform: translate(-50%,-50%);
        padding: 1em;
        /*border-radius: 0.2em;*/
        background: white;
            -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 0.5s; /* Firefox < 16 */
        -ms-animation: fadein 0.5s; /* Internet Explorer */
         -o-animation: fadein 0.5s; /* Opera < 12.1 */
            animation: fadein 0.5s;

         /*animation-name: slideIn;*/
        /*animation-duration: 0.4s*/

    }

    button {
        display: block;
        width: 80%;
        margin:auto;
        border-radius: 16px;
        border: 2px solid #55E6C1;
    }


@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
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
        <br>
    </div>
    </div>
</div>
