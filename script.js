window.onload = function(){
    const textInput = document.querySelector("#text-input");
    textInput.addEventListener("keyup", function(){
        const text = document.querySelector("#meme-text");
        text.innerHTML = textInput.value;
    })
    const imageInput = document.querySelector("#meme-insert");
    imageInput.addEventListener("change", function(){
        const image = document.querySelector("#meme-image");
        image.src = imageInput.value;
    })
    
}
