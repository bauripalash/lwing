<!-- <button title="Bold" on:click="{() => Turn(1)}">𝚃</button>
                <button title="Italic" on:click="{() => Turn(2)}">𝙏</button>
                <button title="Bold Italic" on:click="{() => Turn(3)}">𝘛</button>
                <button title="Bold Italic" on:click="{() => Turn(4)}">𝗧</button>
                <button title="Bold Italic" on:click="{() => Turn(5)}">𝖳</button>
                <button title="Bold Italic" on:click="{() => Turn(6)}">𝕿</button>
                <button title="Bold Italic" on:click="{() => Turn(7)}">𝓣</button>
                <button title="Bold Italic" on:click="{() => Turn(8)}">𝑻</button>
                <button title="Bold Italic" on:click="{() => Turn(9)}">𝐓</button>
                <button title="Bold Italic" on:click="{() => Turn(10)}">𝔗</button> 
export function getSel() // javascript
{
    // obtain the object reference for the <textarea>
    var txtarea = document.getElementById("intext");
    // obtain the index of the first selected character
    var start = txtarea.selectionStart;
    // obtain the index of the last selected character
    var finish = txtarea.selectionEnd;
    // obtain the selected text
    var sel = txtarea.value.substring(start, finish);
    // do something with the selected content
    return {
        start: start,
        end: finish,
        sel: sel
    };
}

// export let RST = rt => {
//     let sel, range;
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.rangeCount) {
//             range = sel.getRangeAt(0);

//             if (document.queryCommandSupported('insertText')) {
//                 document.execCommand('insertText', false, rt);
//                 return true;
//             } else {
//                 range.deleteContents();
//                 range.insertNode(document.createTextNode(rt));
//                 return true;
//             }
//             // range.deleteContents();
//             // range.insertNode(document.createTextNode(rt));
//         }
//     } else if (document.selection && document.selection.createRange) {
//         range = document.selection.createRange();
//         range.text = rt;
//     }
// }

function getInputSelection(el) {
    var start = 0,
        end = 0,
        normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else {
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    return {
        start: start,
        end: end
    };
}



<script>
    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(function () {
    //             console.log('Service Worker Registered');
    //         });
    // }
</script>



            -->
