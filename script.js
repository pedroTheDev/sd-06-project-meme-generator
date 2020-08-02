const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});
