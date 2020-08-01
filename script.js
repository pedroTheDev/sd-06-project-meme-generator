
let loadImage = function (event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};

const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
textInput.addEventListener('input', memeTextInsert);

function memeTextInsert() {
  memeText.innerHTML = textInput.value;
}





