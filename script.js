const text = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeCont = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const memeImage = document.getElementById('meme-image');
const imgP = document.querySelector('#imgP');

text.addEventListener('keyup', function () {
  memeText.innerText = text.value;
});

fire.addEventListener('click', function () {
  memeCont.style.border = '3px dashed red';
});

water.addEventListener('click', function () {
  memeCont.style.border = '5px double blue';
});

earth.addEventListener('click', function () {
  memeCont.style.border = '6px groove green';
});

imgP.addEventListener('click', function (event) {
  memeImage.src = event.target.src;
});

function loadFile(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}
