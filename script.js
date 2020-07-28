const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');

textInput.addEventListener('input', function () {
    memeText.innerHTML = textInput.value;
})

memeInsert.addEventListener('change', function (event) {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
  memeImg.onload = function () {
    URL.revokeObjectURL(memeImg.src);
  };
});