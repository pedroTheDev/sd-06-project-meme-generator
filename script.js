const inputText = document.querySelector('#text-input');
const saida = document.getElementById('meme-image');
const pText = document.querySelector('#meme-text');
const inputImage = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const imageMemeUm = document.querySelector('#meme-1');
const imageMemeDois = document.querySelector('#meme-2');
const imageMemeTres = document.querySelector('#meme-3');
const imageMemeQuatro = document.querySelector('#meme-4');

inputImage.addEventListener('change', function (event) {
  const reader = new FileReader();
  reader.onload = function () {
    saida.src = reader.result;
  };
  if (reader) {
    reader.readAsDataURL(event.target.files[0]);
  }
});

inputText.addEventListener('keyup', function () {
  pText.innerHTML = inputText.value;
});

buttonFire.addEventListener('click', function () {
  memeContainer.className = 'borderFire';
});

buttonWater.addEventListener('click', function () {
  memeContainer.className = 'borderWater';
});

buttonEarth.addEventListener('click', function () {
  memeContainer.className = 'borderEarth';
});

imageMemeUm.addEventListener('click', function () {
  saida.src = '/imgs/meme1.png';
});

imageMemeDois.addEventListener('click', function () {
  saida.src = '/imgs/meme2.png';
});

imageMemeTres.addEventListener('click', function () {
  saida.src = '/imgs/meme3.png';
});

imageMemeQuatro.addEventListener('click', function () {
  saida.src = '/imgs/meme4.png';
});
