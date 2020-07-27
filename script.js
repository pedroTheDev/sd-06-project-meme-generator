function textInput() {
    // Função que vai fazer o texto aparecer no meme
    let inputText = document.getElementById("text-input").value;
    let divMemeText = document.getElementById("meme-text");
    divMemeText.innerHTML = inputText;
}

function imageInput() {
    // Função que vai fazer a imagem aparecer no meme
    let outputImage = document.getElementById("meme-image");
    outputImage.src = URL.createObjectURL(event.target.files[0]);
    outputImage.onload = function() {
        URL.revokeObjectURL(outputImage.src);
    }
}
