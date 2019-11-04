// Transform Normal Text to Unicode Styled Fonts!
//================================================

// UTITLITY CODES
//----------------


export let ord = c => c.codePointAt(0)

export let getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

export let hasSelection = () => {
    if (window.getSelection) {
        let sel = window.getSelection();
        return sel;
    }
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


function getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

function replaceSelectionWithHtml(html) {
        var range;
        if (window.getSelection && window.getSelection().getRangeAt) {
            console.log("X")
            range = window.getSelection().getRangeAt(0);
            range.deleteContents();
            var div = document.createElement("div");
            div.innerHTML = html;
            var frag = document.createDocumentFragment(),
                child;
            while ((child = div.firstChild)) {
                frag.appendChild(child);
            }
            range.insertNode(frag);
        } else if (document.selection && document.selection.createRange) {
            console.log("Y")
            range = document.selection.createRange();
            range.pasteHTML(html);
        }
    }

export function RST(font) {
    // let el = document.getElementById("intext");
    // var sel = getSel(), val = el.innerHTML;
    // // console.log(sel , val);
    // let x = document.createElement('div');
    // x.innerHTML = Convert(font , sel.sel).join("");
    // let z = x.innerHTML;
    // console.log(Convert(font , sel.sel).join(""))

    // document.execCommand('insertText', false, "hello")
    // el.value = val.slice(0, sel.start) + "" + z + "" + val.slice(sel.end);

    // console.log(el.innerHTML ,el.innerText , el.value);

    // console.log(Convert(font , getSel()).join(''));
    if (getSelectionHtml()){
        replaceSelectionWithHtml(Convert(font , getSelectionHtml()).join(""));
    }else{
        const grid = document.getElementById("intext");
        grid.innerHTML = Convert(font , grid.innerText).join("");
    }

    

    // if (document.selection && document.selection.createRange) {
    //     range = document.selection.createRange();
    //     range.text = font;
    //     console.log("X")
    // }else{
    //     console.log("Y")
    // }
}

//----- END -------

// function WriteAll(converted) {
//     // Join string of new unicode characters
//     let newString = converted.join('');
//     const grid = document.getElementById("intext");
//     // Add new characters to the grid
//     grid.innerHTML = newString;
// }

// FONT LISTS
//-------------------

// UNICODE FONT LIST
export let FONTS = [9424, 120432, 120380, 120328, 120276, 120224, 120172, 120016, 119912, 119808];

// ALPHABET LIST
let ALPHAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//----- END ------ 



// CONVERTERS
//===============

export let Convert = (font, string) => {
    // let font = parseInt(font);
    // console.log(typeof font)
    let C = []; // Converted List of Letters
    string.split('').forEach(e => {
        let i = ALPHAS.indexOf(e);
        if (i > -1) {
            C.push("&#" + (parseInt(font + i)) + ";");
        } else {
            C.push(e);
        }
    });

    return C;
}
