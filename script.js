const textInput = document.querySelector('#text-input');
const textmeme = document.querySelector('#meme-text');
const imageMeme = document.('#meme-insert');
const preview = document.getElementById('meme-image');

textInput.addEventListener('keyup', function () {
    textmeme.innerHTML = textInput.value;
});
memeInput.addEventListener('change', function (event) {
image.src = URL.createObjectURL(event.target.files[0]);
});