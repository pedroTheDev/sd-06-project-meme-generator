const memeText = document.getElementById('meme-text');
const textImput = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');

textImput.addEventListener('keyup', function () {
  memeText.innerHTML = textImput.value;
});

function loadFile(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.style.height = '450px';
  output.style.width = '450px';
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
}

function botaoFire() {
  memeImageContainer.style.border = '3px dashed red';
}

function botaoWater() {
  memeImageContainer.style.border = '5px double blue';
}

function botaoEarth() {
  memeImageContainer.style.border = '6px groove green';
}

function imgs(image) {
  const output = document.getElementById('meme-image');
  output.src = image.src;
}
