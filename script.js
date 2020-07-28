// Meme Generator
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', function() {
  const showText = document.querySelector('#meme-text');
  showText.innerHTML = textInput.value;
});