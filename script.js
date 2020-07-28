const inputText = document.querySelector('#text-input');
const saida = document.getElementById('meme-image');
const pText = document.querySelector('#meme-text');
const inputImage = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

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
