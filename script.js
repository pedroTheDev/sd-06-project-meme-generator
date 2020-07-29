const textInput = document.querySelector('#text-input');
const textInside = document.querySelector('#meme-text');
// let imageInput = document.querySelector("#meme-insert");
// let imageInside = document.querySelector("#meme-image");

function changeText() {
  textInside.innerText = textInput.value;
  textInside.className = 'meme-text';
}
textInput.addEventListener('keyup', changeText);


function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};
