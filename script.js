const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');
const imgContainer = document.querySelector('#meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

function loadFile(event) {
  const uploadImg = document.getElementById('memesrc');
  uploadImg.src = URL.createObjectURL(event.target.files[0]);
}

btnFire.addEventListener('click', function () {
  imgContainer.style.borderColor = 'red';
  imgContainer.style.borderWidth = '3px';
  imgContainer.style.borderStyle = 'dashed';
});

btnWater.addEventListener('click', function () {
  imgContainer.style.borderColor = 'blue';
  imgContainer.style.borderWidth = '5px';
  imgContainer.style.borderStyle = 'double';
});

btnEarth.addEventListener('click', function () {
  imgContainer.style.borderColor = 'green';
  imgContainer.style.borderWidth = '6px';
  imgContainer.style.borderStyle = 'groove';
});

window.onload = loadFile;
