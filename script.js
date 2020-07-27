const image = document.querySelector('#meme-image');
const imageSelector = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');

const textInput = document.querySelector('#text-input');
const textPrint = document.querySelector('#meme-text');

function loadImg(event) {
  if (event.target.nodeName === 'IMG') {
    image.src = event.target.src;
  } else {
    image.src = URL.createObjectURL(event.target.files[0]);
    imageSelector.value = null;
  }
}

imageSelector.addEventListener('change', loadImg);

function printText(event) {
  const textValue = document.querySelector('#text-input').value;
  textPrint.innerHTML = textValue;
}

textInput.addEventListener('keyup', printText);

const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');
const resetBtn = document.querySelector('#reset');

function changeBorder(element) {
  memeContainer.style.border = element;
}

fireBtn.addEventListener('click', () => { changeBorder('3px dashed red'); });
waterBtn.addEventListener('click', () => { changeBorder('5px double blue'); });
earthBtn.addEventListener('click', () => { changeBorder('6px groove green'); });
resetBtn.addEventListener('click', () => { changeBorder('1px solid black'); });

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

meme1.addEventListener('click', loadImg);
meme2.addEventListener('click', loadImg);
meme3.addEventListener('click', loadImg);
meme4.addEventListener('click', loadImg);
