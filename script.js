
var textInput = document.getElementById('text-input');
var memeText = document.getElementById('meme-text');

textInput.addEventListener('input', memeTextInsert);
function memeTextInsert() {
  memeText.innerHTML = textInput.value;
}

