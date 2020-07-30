const textInput = document.querySelector('#text-input');
const textInside = document.querySelector('#meme-text');
const imageInput = document.getElementById('meme-image');

function changeText() {
  textInside.innerText = textInput.value;
  textInside.className = 'meme-text';
}
textInput.addEventListener('keyup', changeText);

const loadFile = function (event) {
  imageInput.src = URL.createObjectURL(event.target.files[0]);
  // imageInput.onload = function () {
  //   URL.revokeObjectURL(imageInput.src); // free memory
  // };
};
