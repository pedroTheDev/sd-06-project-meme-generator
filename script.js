const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');
const imgContainer = document.querySelector('#meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

document
  .getElementById('meme-insert')
  .addEventListener('change', function (event) {
    const uploadImg = document.getElementById('memesrc');
    uploadImg.src = window.URL.createObjectURL(event.target.files[0]);
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
