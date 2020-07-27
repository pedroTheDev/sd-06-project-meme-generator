const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});
