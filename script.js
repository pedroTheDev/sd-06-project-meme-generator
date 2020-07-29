const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
inputText.addEventListener('keyup', function () {
  memeText.innerHTML = inputText.value;
});