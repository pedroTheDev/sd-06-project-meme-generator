// Req 1
let userTextInput = document.querySelector("#text-input");
let memeTextInput = document.querySelector("#meme-text");

userTextInput.addEventListener("input", function(){
    memeTextInput.innerText = userTextInput.value;
})