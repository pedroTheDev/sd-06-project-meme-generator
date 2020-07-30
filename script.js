window.onload = function () {
  handleImageUpload();
  handleTextInput();
};

const textInput = document.querySelector('#text-input');
const textContainer = document.querySelector('#meme-text');
const imgInput = document.querySelector('#meme-insert');
const imgContainer = document.querySelector('#meme-image');

function addImage(event) {
  imgContainer.src = URL.createObjectURL(event.target.files[0]);
}

function handleImageUpload() {
  imgInput.addEventListener('change', addImage);
}

function addText() {
  textContainer.innerText = textInput.value;
}

function handleTextInput() {
  textInput.addEventListener('input', addText);
}
