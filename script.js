const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('keyup', function () {
  memeText.innerHTML = inputText.value;
});


const memeImage = document.querySelector('.meme-image');
const uploadImage = document.querySelector('#meme-insert');


function displayImage(event) {
  const file = event.target.files[0];
  memeImage.src = URL.createObjectURL(file);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}
uploadImage.addEventListener('change', displayImage);
