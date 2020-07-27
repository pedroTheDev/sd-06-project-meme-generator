const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

let loadFile = function(event) {
  let uploadImg = document.getElementById('memesrc');
  uploadImg.src = URL.createObjectURL(event.target.files[0]);
  uploadImg.onload = function() {
    URL.revokeObjectURL(uploadImg.src);
  }
};
