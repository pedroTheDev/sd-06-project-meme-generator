const textInput = document.querySelector('#text-input');
const textmeme = document.querySelector('#meme-text');
const imageMeme = document.getElementById('meme-insert');
const preview = document.getElementById('meme-image');

function changeText() {
    textmeme.innerHTML = textInput.value;
}
textInput.addEventListener('keyup', changeText);

function placeImage() {
    preview.scr = window.URL.createObjectURL(imageMeme.files[0]);
}
imageMeme.addEventListener('change', placeImage);