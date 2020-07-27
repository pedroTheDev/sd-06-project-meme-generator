const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');

function addText() {
  memeText.innerText = textInput.value;
}

function insertImg() {
  let temp = memeInsert.value;
  img.src = temp;
}

textInput.addEventListener('input', addText);

memeInsert.addEventListener('change', insertImg);
