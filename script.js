window.onload = function(){
    var textInput = document.querySelector("#text-input");
    var textInside = document.querySelector("#meme-text");
    var imageInput = document.querySelector("#meme-insert");
    var imageInside = document.querySelector("#meme-image");
    textInput.addEventListener("keyup", function(){
        textInside.innerText = textInput.value;
        textInside.className = "espec-text";
    })

    imageInput.addEventListener("change", function(event){
        imageInside.src = URL.createObjectURL(event.target.files[0])
    })
}