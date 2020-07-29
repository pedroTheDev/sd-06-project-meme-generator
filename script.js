const textInput = document.querySelector('#text-input');
const textInside = document.querySelector('#meme-text');
const output = document.getElementById('meme-image');

function changeText() {
  textInside.innerText = textInput.value;
  textInside.className = 'meme-text';
}
textInput.addEventListener('keyup', changeText);

const loadFile = function (event) {
  output.src = URL.createObjectURL(event.target.files[0]);
  // output.onload = function () {
  //   URL.revokeObjectURL(output.src); // free memory
  // };
};
