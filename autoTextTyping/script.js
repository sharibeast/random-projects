const text = 'i cant do anything without god';
let index = 0

function autoType(params) {
    document.body.innerText = text.slice(0,index);
    index++;
    if (index>text.length) {
        index = 0
    }
}
setInterval(autoType,100);