let inputText = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let textInMeme = '';
function printTextMeme() {
  textInMeme = inputText.value;
  memeText.innerHTML = textInMeme;
}

// const loadFile = function (event) {
//   const output = document.getElementById('output');
//   output.src = URL.createObjectURL(event.target.files[0]);
//   output.onload = function () {
//     URL.revokeObjectURL(output.src);
//   }
// };

inputText.addEventListener("keyup", printTextMeme);

let output = document.getElementById('output');
let memeImg = document.getElementById('meme-image');
function showImage(e) {
  let getFile = e.target.files[0];
  memeImg.src = URL.createObjectURL(getFile);
}
output.addEventListener('change', showImage);
