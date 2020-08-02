const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');
const fileChooser = document.getElementById('meme-insert');
const imagePreview = document.getElementById('meme-image');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

function abrirImage() {
  imagePreview.src = window.URL.createObjectURL(fileChooser.files[0]);
}
fileChooser.addEventListener('change', abrirImage);
