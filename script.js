// Interação com o input de TEXTO
// 1. Elementos para acessar
let textInput = document.getElementById("text-input");
let textMeme = document.getElementById("meme-text");
// 2. Pega o texto e mostra na tela
let userTextMeme = "";
function getTextInput () {
    userTextMeme = textInput.value;
    textMeme.innerHTML = userTextMeme;
}
textInput.addEventListener("keyup", getTextInput);

// Interação com o input da IMAGEM
// 1. Elementos para acessar
let inputImage = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
// 2. Pegar a imagem e mostrar na tela
function displayImage(event) {
    let file = event.target.files[0];
    memeImage.src = URL.createObjectURL(file);
}
inputImage.addEventListener("change", displayImage);

//Botões estilização
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

btnFire.addEventListener('click', () => {
    memeImage.style.border = '3px dashed red';
});
  
btnWater.addEventListener('click', () => {
    memeImage.style.border = '5px double blue';
});
  
btnEarth.addEventListener('click', () => {
    memeImage.style.border = '6px groove green';
});
  