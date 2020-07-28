const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const memeInsertImg = document.querySelector('#meme-insert');
const containerMemeImage = document.querySelector('#meme-image-container');
const fireBorderButton = document.querySelector('#fire');
const waterBorderButton = document.querySelector('#water');
const earthBorderButton = document.querySelector('#earth');
const meme1pic = document.querySelector('#meme-1');
const meme2pic = document.querySelector('#meme-2');
const meme3pic = document.querySelector('#meme-3');
const meme4pic = document.querySelector('#meme-4');


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

function memeSelected(event) {
  if (event.target === meme1pic) {
    memeImg.src = meme1pic.src;
  }
  if (event.target === meme2pic) {
    memeImg.src = meme2pic.src;
  }
  if (event.target === meme3pic) {
    memeImg.src = meme3pic.src;
  }
  if (event.target === meme4pic) {
    memeImg.src = meme4pic.src;
  }
}

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

memeInsertImg.addEventListener('input', function () {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});

fireBorderButton.addEventListener('click', changeBorders);
waterBorderButton.addEventListener('click', changeBorders);
earthBorderButton.addEventListener('click', changeBorders);

meme1pic.addEventListener('click', memeSelected);
meme2pic.addEventListener('click', memeSelected);
meme3pic.addEventListener('click', memeSelected);
meme4pic.addEventListener('click', memeSelected);
