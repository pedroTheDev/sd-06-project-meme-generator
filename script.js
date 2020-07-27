let divMemeGenerator = document.getElementById("meme-image-container");

function textInput() {
    // Função que vai fazer o texto aparecer no meme
    let inputText = document.getElementById("text-input").value;
    console.log(inputText);
    divMemeGenerator.innerHTML = inputText;
}

function imageInput() {
    // Função que vai fazer a imagem aparecer no meme
    let inputImage = document.getElementById("meme-insert").value;
    divMemeGenerator.innerHTML = `<img src="${inputImage}" alt="meme">`;
    console.log(inputImage);
}
