window.onload = function(){
    let textInput = document.querySelector("#text-input");
    textInput.addEventListener("keyup", function(){
        let text = document.querySelector("#meme-text");
        text.innerHTML = textInput.value;
    })
     
}