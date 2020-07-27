const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const memeInsertImg = document.querySelector('#meme-insert');
const containerMemeImage = document.querySelector('#meme-image-container');
const fireBorderButton = document.querySelector('#fire');
const waterBorderButton = document.querySelector('#water');
const earthBorderButton = document.querySelector('#earth');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});


memeInsertImg.addEventListener('input', function () {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});

function changeBorders() {
  if (event.target === fireBorderButton) {
    containerMemeImage.classList.remove('waterBorder');
    containerMemeImage.classList.remove('earthBorder');
    containerMemeImage.classList.add('fireBorder');
  }
  if (event.target === waterBorderButton) {
    containerMemeImage.classList.remove('fireBorder');
    containerMemeImage.classList.remove('earthBorder');
    containerMemeImage.classList.add('waterBorder');
  }
  if (event.target === earthBorderButton) {
    containerMemeImage.classList.remove('waterBorder');
    containerMemeImage.classList.remove('fireBorder');
    containerMemeImage.classList.add('earthBorder');
  }
}
fireBorderButton.addEventListener('click', changeBorders);
waterBorderButton.addEventListener('click', changeBorders);
earthBorderButton.addEventListener('click', changeBorders);
