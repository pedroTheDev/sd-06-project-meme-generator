const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

function imgInsert(event) {
  let uploadImg = document.getElementById('meme-image');
  uploadImg.src = URL.createObjectURL(event.target.files[0]);
  uploadImg.onload = function() {
    URL.revokeObjectURL(uploadImg.src);
  }
};

document.getElementById('meme-insert').addEventListener('change', imgInsert);
