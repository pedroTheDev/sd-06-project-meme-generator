const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
let textInMeme = '';
function printTextMeme() {
  textInMeme = inputText.value;
  memeText.innerHTML = textInMeme;
}

inputText.addEventListener('keyup', printTextMeme);

const output = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
function showImage(e) {
  const getFile = e.target.files[0];
  memeImg.src = URL.createObjectURL(getFile);
}
output.addEventListener('change', showImage);

const btnRed = document.getElementById('fire');
function changeRed() {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
}
btnRed.addEventListener('click', changeRed);

const btnBlue = document.getElementById('water');
function changeBlue() {
  document.getElementById('meme-image-container').style.border = '5px double blue';
}
btnBlue.addEventListener('click', changeBlue);

const btnGreen = document.getElementById('earth');
function changeGreen() {
  document.getElementById('meme-image-container').style.border = '6px groove green';
}
btnGreen.addEventListener('click', changeGreen);

const btnReset = document.getElementById('reset');
function resetBorder() {
  document.getElementById('meme-image-container').style.border = '1px solid black';
}
btnReset.addEventListener('click', resetBorder);