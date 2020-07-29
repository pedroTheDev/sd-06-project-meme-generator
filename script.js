const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('keyup', function () {
  memeText.innerHTML = inputText.value;
});

const memeInsert = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');

memeInsert.addEventListener('change', function(event){
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});
