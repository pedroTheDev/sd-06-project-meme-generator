const memeImg = document.getElementById('meme-image');
const imgInsert = document.getElementById('meme-insert');
const userTextInput = document.getElementById('text-input');
const memeTextInput = document.getElementById('meme-text');
const imgContainer = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

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
