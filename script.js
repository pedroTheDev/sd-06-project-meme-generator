const textInput = document.querySelector('#text-input');
const textmeme = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-insert');
let preview = document.queryCommandEnabled('#meme-image');

textInput.addEventListener('keyup', function () {
    textmeme.innerHTML = textInput.value;
});

imageMeme.addEventListener('change', function (event) {
preview.src = URL.createObjectURL(event.target.files[0]);
});