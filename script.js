const memeText = document.getElementById('meme-text');
const textImput = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');

textImput.addEventListener('keyup', function () {
  memeText.innerHTML = textImput.value;
});

const loadFile = function (event) {
  const output = document.getElementById('meme-insert');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.style.maxHeight = '200px';
  output.style.maxWidth = '200px';
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};
