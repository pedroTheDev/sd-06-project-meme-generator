const memeImg = document.querySelector('#meme-image');
const imgInsert = document.querySelector('#meme-insert');
const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');
const imgContainer = document.querySelector('#meme-image-container');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');

function uploadFile() {
  memeImg.src = window.URL.createObjectURL(this.files[0]);
}

imgInsert.addEventListener('change', uploadFile);

userTextInput.addEventListener('keyup', function () {
  memeTextInput.innerText = userTextInput.value;
});

btnFire.addEventListener('click', function () {
  imgContainer.style.border = '3px dashed red';
});

btnWater.addEventListener('click', function () {
  imgContainer.style.border = '5px double blue';
});

btnEarth.addEventListener('click', function () {
  imgContainer.style.border = '6px groove green';
});
