const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
let textInMeme = '';
function printTextMeme() {
  textInMeme = inputText.value;
  memeText.innerHTML = textInMeme;
}

inputText.addEventListener('keyup', printTextMeme);

const output = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
function showImage(e) {
  const getFile = e.target.files[0];
  memeImg.src = URL.createObjectURL(getFile);
}
output.addEventListener('change', showImage);
