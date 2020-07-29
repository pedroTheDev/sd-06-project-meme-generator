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
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

function fire() {
    memeImage.style.border = 'dashed 3px red';
}
buttonFire.addEventListener('click', fire)
  
function water () {
    memeImage.style.border = 'double 5px blue';
}
buttonWater.addEventListener('click', water)
  
function earth () { 
    memeImage.style.border = 'groove 6px green';
}
  