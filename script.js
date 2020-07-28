const loadFile = function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};

addEventListener('input', function insertText() {
  const text = document.getElementById('text-input');
  document.getElementById('meme-text').innerHTML = text.value;
});
