let memeText = document.getElementById('meme-text');
let textImput = document.getElementById('text-input');
let memeImageContainer = document.getElementById('meme-image-container');

textImput.addEventListener('keyup', function () {
  memeText.innerHTML = textImput.value;
});

let loadFile = function (event) {
  let output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.style.maxHeight = '200px';
  output.style.maxWidth = '200px';
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  }
};

// memeImageContainer.src = output;