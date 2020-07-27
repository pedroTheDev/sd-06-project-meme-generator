const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('input', function() {
  memeText.innerText = textInput.value;
});

const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

memeInsert.addEventListener('change', function(path) {
  memeImage.src = URL.createObjectURL(path.target.files[0]);
});

const memeBorder = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

fireButton.addEventListener('click', function() {
  memeBorder.style.border = '3px dashed red';
});
waterButton.addEventListener('click', function() {
  memeBorder.style.border = '5px double blue';
});
earthButton.addEventListener('click', function() {
  memeBorder.style.border = '6px groove green';
});
