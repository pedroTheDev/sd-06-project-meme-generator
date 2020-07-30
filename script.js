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
