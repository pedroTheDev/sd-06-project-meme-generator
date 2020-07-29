const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const btnInsertMeme = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const memeOne = document.getElementById('meme-1');
const memeTwo = document.getElementById('meme-2');
const memeThree = document.getElementById('meme-3');
const memeFour = document.getElementById('meme-4');

textInput.addEventListener('keyup', function () {
  if (document.querySelector('img')) {
    document.querySelector('img').style.zIndex = '-1';
    memeText.style.border = 'none';
  }
  memeText.innerText = textInput.value;
});

btnInsertMeme.addEventListener('change', function (event) {
  const file = event.target.files.item(0);
  const reader = new FileReader();
  reader.onload = function (e) {
    memeImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

btnFire.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
});

btnWater.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '5px double blue';
});

btnEarth.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '6px groove green';
});

memeOne.addEventListener('click', function () {
  memeImage.src = memeOne.src;
});

memeTwo.addEventListener('click', function () {
  memeImage.src = memeTwo.src;
});

memeThree.addEventListener('click', function () {
  memeImage.src = memeThree.src;
});

memeFour.addEventListener('click', function () {
  memeImage.src = memeFour.src;
});
