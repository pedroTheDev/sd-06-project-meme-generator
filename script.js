const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

memeInsert.addEventListener('change', function (path) {
  memeImage.src = URL.createObjectURL(path.target.files[0]);
});

const memeBorder = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

fireButton.addEventListener('click', function () {
  memeBorder.style.border = '3px dashed red';
});
waterButton.addEventListener('click', function () {
  memeBorder.style.border = '5px double blue';
});
earthButton.addEventListener('click', function () {
  memeBorder.style.border = '6px groove green';
});

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

meme1.addEventListener('click', function () {
  memeImage.src = meme1.src;
});
meme2.addEventListener('click', function () {
  memeImage.src = meme2.src;
});
meme3.addEventListener('click', function () {
  memeImage.src = meme3.src;
});
meme4.addEventListener('click', function () {
  memeImage.src = meme4.src;
});
