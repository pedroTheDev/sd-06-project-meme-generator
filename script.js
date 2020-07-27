const textInput = document.querySelector('#text-input');
const memeText = document.getElementById('meme-text');
function inputText () {
    memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', inputText);
const imageChoose = document.querySelector('#meme-insert');
const imageInput = document.querySelector('#meme-image');
function image() {
    imageInput.src = window.URL.createObjectURL(imageChoose.files[0]);
}
imageChoose.addEventListener('change', image);
