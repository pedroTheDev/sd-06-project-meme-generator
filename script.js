const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const memeInsertImg = document.querySelector('#meme-insert');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});


memeInsertImg.addEventListener('input', function () {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});
