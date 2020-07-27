const texto = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.getElementById('meme-image');
const memeInput = document.querySelector('#meme-insert');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

const memeUm = document.getElementById('meme-1');
const memeDois = document.getElementById('meme-2');
const memeTres = document.getElementById('meme-3');
const memeQuatro = document.getElementById('meme-4');

function textWrite() {
  memeText.innerHTML = texto.value;
}

function selectedImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}

function changeFire() {
  container.style.border = '3px dashed red';
}

function changeWater() {
  container.style.border = '5px double blue';
}

function changeEarth() {
  container.style.border = '6px groove green';
}

function trocaMemeUm() {
  memeImage.src = memeUm.src;
}

function trocaMemeDois() {
  memeImage.src = memeDois.src;
}

function trocaMemeTres() {
  memeImage.src = memeTres.src;
}

function trocaMemeQuatro() {
  memeImage.src = memeQuatro.src;
}

texto.addEventListener('input', textWrite);
memeInput.addEventListener('change', selectedImage);
btnFire.addEventListener('click', changeFire);
btnWater.addEventListener('click', changeWater);
btnEarth.addEventListener('click', changeEarth);
memeUm.addEventListener('click', trocaMemeUm);
memeDois.addEventListener('click', trocaMemeDois);
memeTres.addEventListener('click', trocaMemeTres);
memeQuatro.addEventListener('click', trocaMemeQuatro);
