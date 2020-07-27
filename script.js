const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imgButton = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');

textInput.addEventListener('keyup', function () {
  memeText.innerText = textInput.value.toUpperCase();
});

const loadFile = function(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function() {
    URL.revokeObjectURL(image.src)
  }
}
