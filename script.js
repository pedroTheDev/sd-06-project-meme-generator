const textInput = document.querySelector('#text-input');
const textmeme = document.querySelector('#meme-text');
const imageMeme = document.querySelector('#meme-insert');
const preview = document.querySelector('#meme-image');

textInput.addEventListener('keyup', function () {
    textmeme.innerHTML = textInput.value;
});

imageMeme.addEventListener('change', function (event) {
    preview.src = URL.createObjectURL(event.target.files[0]);
    })