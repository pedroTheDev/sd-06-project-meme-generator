const userTextInput = document.getElementById('text-input');
const memeTextInput = document.getElementById('meme-text');
const imgContainer = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

function uploadFile() {
  const memeImg = document.getElementById('meme-image');
  memeImg.src = window.URL.createObjectURL(this.files[0]);
}

document.getElementById('meme-insert').addEventListener('change', uploadFile);

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
