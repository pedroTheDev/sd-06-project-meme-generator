let inputText = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let textInMeme = '';
function printTextMeme() {
  textInMeme = inputText.value;
  memeText.innerHTML = textInMeme;
}
inputText.addEventListener('keyup', printTextMeme);
const loadFile = function (event) {
  const output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  }
};
