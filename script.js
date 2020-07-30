// Interação com o input de TEXTO
// 1. Elementos para acessar
const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
// 2. Pega o texto e mostra na tela
function getTextInput() {
  let userTextMeme = '';
  userTextMeme = textInput.value;
  textMeme.innerHTML = userTextMeme;
}
textInput.addEventListener('keyup', getTextInput);

// Interação com o input da IMAGEM
// 1. Elementos para acessar
const inputImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
// 2. Pegar a imagem e mostrar na tela
function displayImage(event) {
  const file = event.target.files[0];
  memeImage.src = URL.createObjectURL(file);
}
inputImage.addEventListener('change', displayImage);

// Botões estilização
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const memeImageContainer = document.getElementById('meme-image-container');

function fire() {
  memeImageContainer.style.border = 'dashed 3px red';
}
buttonFire.addEventListener('click', fire);

function water() {
  memeImageContainer.style.border = 'double 5px blue';
}
buttonWater.addEventListener('click', water);

function earth() {
  memeImageContainer.style.border = 'groove 6px green';
}
buttonEarth.addEventListener('click', earth);

function getElementImage() {
  const elementImage = document.getElementById('meme-image');
  return elementImage;
}

const elementPresetsContainer = document.getElementById('presets-images');

elementPresetsContainer.addEventListener('click', function (event) {
  const presetImage = event.target;
  const image = getElementImage();
  image.src = presetImage.src;
});
