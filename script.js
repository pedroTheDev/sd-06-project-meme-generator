
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

function getElementMemeText() {
  const memeText = document.getElementById('meme-text');
  return memeText;
}

function getElementImage() {
  const elementImage = document.getElementById('meme-image');
  return elementImage;
}

