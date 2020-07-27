
const elementTextInput = document.getElementById('text-input');
elementTextInput.addEventListener('input', function() {
  const textInput = elementTextInput.value;
  const memeText = getElementMemeText();
  memeText.innerText = textInput;
});

const elementImageInput = document.getElementById('meme-insert');
elementImageInput.addEventListener('input', function(event) {
  const image = getElementImage();
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function() {
    URL.revokeObjectURL(image.src);
  }
});

const elementRedButton = document.getElementById('fire');
elementRedButton.addEventListener('click', function() {
  const memeBorder = getElementMemeContainer();
  memeBorder.style.border = '3px dashed red';
});

const elementBlueButton = document.getElementById('water');
elementBlueButton.addEventListener('click', function() {
  const memeBorder = getElementMemeContainer();
  memeBorder.style.border = '5px double blue';
});

const elementGreenButton = document.getElementById('earth');
elementGreenButton.addEventListener('click', function() {
  const memeBorder = getElementMemeContainer();
  memeBorder.style.border = '6px groove green';
});

function getElementMemeText() {
  const memeText = document.getElementById('meme-text');
  return memeText;
}

function getElementImage() {
  const elementImage = document.getElementById('meme-image');
  return elementImage;
}

function getElementMemeContainer () {
  return document.getElementById('meme-image-container');
}

