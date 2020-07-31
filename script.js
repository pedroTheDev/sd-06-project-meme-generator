// Meme Generator
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', function () {
  const showText = document.querySelector('#meme-text');
  showText.innerHTML = textInput.value;
});

const imageUpload = document.querySelector('#meme-insert');
imageUpload.addEventListener('change', function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
});

const button1 = document.querySelector('#fire');
button1.addEventListener('click', function () {
  const memeFire = document.querySelector('#meme-image-container');
  memeFire.style.border = '3px dashed red';
});

const buttonWater = document.querySelector('#water');
buttonWater.addEventListener('click', function () {
  const memeWater = document.querySelector('#meme-image-container');
  memeWater.style.border = '5px double blue';
});

const buttonEarth = document.querySelector('#earth');
buttonEarth.addEventListener('click', function () {
  const memeEarth = document.querySelector('#meme-image-container');
  memeEarth.style.border = '6px groove green';
});

const meme1 = document.querySelector('#meme-1');
meme1.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme1.png';
});

const meme2 = document.querySelector('#meme-2');
meme2.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme2.png';
});

const meme3 = document.querySelector('#meme-3');
meme3.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme3.png';
});

const meme4 = document.querySelector('#meme-4');
meme4.addEventListener('click', function () {
  const replaceImage = document.querySelector('#meme-image');
  replaceImage.src = 'imgs/meme4.png';
});
