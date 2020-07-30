const txtInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text ');

txtInput.addEventListener('keyup', function () {
  memeText.innerHTML = txtInput.value;
});
