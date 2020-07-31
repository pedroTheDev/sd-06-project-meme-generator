/* Método para pegar o texto digitado e exibir no container */
const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
let textInMeme = '';
function printTextMeme() {
  textInMeme = inputText.value;
  memeText.innerHTML = textInMeme;
}

inputText.addEventListener('keyup', printTextMeme);

/* Método para exibir as imagens selecionadas no container */
const output = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
function showImage(e) {
  const getFile = e.target.files[0];
  memeImg.src = URL.createObjectURL(getFile);
}
output.addEventListener('change', showImage);

/* Métodos para adicionar as bordas pré definidas ao iniciar o programa */
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

/* Método para adicionar os memes pré prontos no container */
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const memeChange = document.getElementById('meme-insert');

function setMeme(event) {
  const meme = event.target;
  if (meme === meme1) {
    memeImg.src = '/imgs/meme1.png';
  } else if (meme === meme2) {
    memeImg.src = '/imgs/meme2.png';
  } else if (meme === meme3) {
    memeImg.src = '/imgs/meme3.png';
  } else if (meme === meme4) {
    memeImg.src = '/imgs/meme4.png';
  }
}
memeChange.addEventListener('change', setMeme);
meme1.addEventListener('click', setMeme);
meme2.addEventListener('click', setMeme);
meme3.addEventListener('click', setMeme);
meme4.addEventListener('click', setMeme);
