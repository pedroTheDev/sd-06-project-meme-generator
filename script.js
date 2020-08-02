const memeImg = document.getElementById('meme-image');
const imgInsert = document.getElementById('meme-insert');
const userTextInput = document.getElementById('text-input');
const memeTextInput = document.getElementById('meme-text');
const imgContainer = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const preMadeOne = document.getElementById('meme-1');
const preMadeTwo = document.getElementById('meme-2');
const preMadeThree = document.getElementById('meme-3');
const preMadeFour = document.getElementById('meme-4');

function uploadFile() {
  // eslint-disable-next-line node/no-unsupported-features/node-builtins
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

preMadeOne.addEventListener('click', function () {
  memeImg.src = 'imgs/meme1.png';
});

preMadeTwo.addEventListener('click', function () {
  memeImg.src = 'imgs/meme2.png';
});

preMadeThree.addEventListener('click', function () {
  memeImg.src = 'imgs/meme3.png';
});

preMadeFour.addEventListener('click', function () {
  memeImg.src = 'imgs/meme4.png';
});
