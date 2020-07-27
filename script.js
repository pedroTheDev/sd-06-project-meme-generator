// ver se dá para refatorar usando event.target nas situações
function getElementMemeText() {
  const memeText = document.getElementById('meme-text');
  return memeText;
}

function getElementImage() {
  const elementImage = document.getElementById('meme-image');
  return elementImage;
}

function getElementMemeContainer() {
  return document.getElementById('meme-image-container');
}

// Insert text
const elementTextInput = document.getElementById('text-input');
elementTextInput.addEventListener('input', function () {
  const textInput = elementTextInput.value;
  const memeText = getElementMemeText();
  memeText.innerText = textInput;
});

// Add image
const elementImageInput = document.getElementById('meme-insert');
elementImageInput.addEventListener('input', function (event) {
  const image = getElementImage();
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
  };
});

// Choose preset meme image
const elementPresetsContainer = document.getElementById('presets-images');
elementPresetsContainer.addEventListener('click', function (event) {
  const presetImage = event.target;
  const image = getElementImage();
  image.src = presetImage.src;
});

// Fire border style
const elementRedButton = document.getElementById('fire');
elementRedButton.addEventListener('click', function () {
  const memeBorder = getElementMemeContainer();
  memeBorder.style.border = '3px dashed red';
});

// Water border style
const elementBlueButton = document.getElementById('water');
elementBlueButton.addEventListener('click', function () {
  const memeBorder = getElementMemeContainer();
  memeBorder.style.border = '5px double blue';
});

// Earth border style
const elementGreenButton = document.getElementById('earth');
elementGreenButton.addEventListener('click', function () {
  const memeBorder = getElementMemeContainer();
  memeBorder.style.border = '6px groove green';
});
