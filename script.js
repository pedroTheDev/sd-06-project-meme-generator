const inputDeTexto = document.querySelector('#text-input');
inputDeTexto.addEventListener('keyup', function () {
  const displayText = document.querySelector('#meme-text');
  displayText.innerHTML = inputDeTexto.value;
});

const uploadFile = document.querySelector('#meme-insert');
uploadFile.addEventListener('change', function (event) {
  const TxtOutput = document.getElementById('meme-image');
  TxtOutput.src = URL.createObjectURL(event.target.files[0]);
  TxtOutput.onload = function () {
    URL.revokeObjectURL(TxtOutput.src);
  };
});

const exemplo1 = document.querySelector('#meme-1');
exemplo1.addEventListener('click', function () {
  const substituirExemplo = document.querySelector('#meme-image');
  substituirExemplo.src = 'meme1.png';
});

const exemplo2 = document.querySelector('#meme-2');
exemplo2.addEventListener('click', function () {
  const substituirExemplo = document.querySelector('#meme-image');
  substituirExemplo.src = 'meme2.png';
});

const exemplo3 = document.querySelector('#meme-3');
exemplo3.addEventListener('click', function () {
  const substituirExemplo = document.querySelector('#meme-image');
  substituirExemplo.src = 'meme3.png';
});

const exemplo4 = document.querySelector('#meme-4');
exemplo4.addEventListener('click', function () {
  const substituirExemplo = document.querySelector('#meme-image');
  substituirExemplo.src = 'meme4.png';
});

const fogo = document.querySelector('#fire');
fogo.addEventListener('click', function () {
  const memeFogo = document.querySelector('#meme-image-container');
  memeFogo.style.border = '3px dashed red';
});

const agua = document.querySelector('#water');
agua.addEventListener('click', function () {
  const memeAgua = document.querySelector('#meme-image-container');
  memeAgua.style.border = '5px double blue';
});

const terra = document.querySelector('#earth');
terra.addEventListener('click', function () {
  const memeTerra = document.querySelector('#meme-image-container');
  memeTerra.style.border = '6px groove green';
});