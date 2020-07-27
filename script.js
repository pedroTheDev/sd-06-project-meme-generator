const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('input', function() {
  memeText.innerText = textInput.value;
  console.log(memeInput.value);
});

const memeInput = document.querySelector('#meme-input');
const memeImage = document.querySelector('#meme-image');

memeInput.addEventListener('change', function(path) {
  memeImage.src = URL.createObjectURL(path.target.files[0]);
});
