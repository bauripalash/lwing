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


export function getSelectionHtml() {
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
            // console.log("X")
            range = window.getSelection().getRangeAt(0);
            console.log("Range" , range);
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
            console.log("Range" , range);
            range.pasteHTML(html);
        }
    }

export function RST(font) {
    if (getSelectionHtml() != ""){
        replaceSelectionWithHtml(Convert(font , getSelectionHtml()).join(""));
    }else{
        const grid = document.getElementById("intext");
        grid.innerHTML = Convert(font , grid.innerText).join("");
    }

}

// Office - 1,8,9
// Casual - 2,3,4,5
// Frakur - 6,10
// Hand - 7

//----- END -------


// FONT LISTS
//-------------------

// UNICODE FONT LIST
export let FONTS = [120432, 120380, 120328, 120276, 120224, 120172, 120016, 119912, 119808 , 120068];

// ALPHABET LIST
let ALPHAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let FRAKUR_REPLACE_LIST = {
    2 : "&#8493;", //C
    7 : "&#8460;" , //H
    8 : "&#8465;" , //I
    17 : "&#8476;" , //R
    25 : "&#8488;" //Z

}
//----- END ------ 


export let copyText = containerid => {
var elt = document.getElementById(containerid);
    if (document.selection) { // IE
        if(elt.nodeName.toLowerCase() === "input"){
            document.getElementById(containerid).select();
            document.execCommand("copy");
        }else{
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select();
            document.execCommand("copy");
        } 

    } else if (window.getSelection) {
        if(elt.nodeName.toLowerCase() === "input"){
            document.getElementById(containerid).select();
            document.execCommand("copy");
        }else{
            var range_ = document.createRange();
            range_.selectNode(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range_);
            document.execCommand("copy");
    }
}
};


// CONVERTERS
//===============

export let Convert = (font, string) => {
    let C = []; // Converted List of Letters
    string.split('').forEach(e => {
        let i = ALPHAS.indexOf(e);
        if (i > -1) {
            if (font==120068){
                if (Object.keys(FRAKUR_REPLACE_LIST).indexOf(i.toString()) > -1){
                    C.push(FRAKUR_REPLACE_LIST[i])
                }else{
                    C.push("&#" + (parseInt(font + i)) + ";");
                }
            }else{
                C.push("&#" + (parseInt(font + i)) + ";");
            }
            
        } else {
            C.push(e);
        }
    });

    return C;
}
