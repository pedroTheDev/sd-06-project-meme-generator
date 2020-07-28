// Meme Generator
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', function () {
  const showText = document.querySelector('#meme-text');
  showText.innerHTML = textInput.value;
});

const imageUpload = document.querySelector('#meme-insert');
imageUpload.addEventListener('change', function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
});
