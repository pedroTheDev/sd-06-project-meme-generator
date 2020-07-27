const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');

function insertText() {
  memeText.innerText = textInput.value;
}

function insertImg() {
  memeImg.src = memeInsert.value;
}

textInput.addEventListener('input', insertText);

memeInsert.addEventListener('change', insertImg);
