const image = document.querySelector('#img-receiver');
const imageSelector = document.querySelector('#meme-insert');

const textInput = document.querySelector('#text-input');
const textPrint = document.querySelector('#meme-text');

textInput.addEventListener('keyup', printText);

function loadImg(event) {
  image.src = URL.createObjectURL(imageSelector.files[0]);
  imageSelector.value = null;
}

imageSelector.addEventListener('change', loadImg);

function printText(event) {
  let textValue = document.querySelector('#text-input').value;
  textPrint.innerHTML = textValue;
}