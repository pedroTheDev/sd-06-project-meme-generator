const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');

userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

// return img choose by the user

function loadFile(event) {
  const uploadImg = document.getElementById('memesrc');
  uploadImg.src = URL.createObjectURL(event.target.files[0]);
  uploadImg.onload = function () {
    URL.revokeObjectURL(uploadImg.src);
  };
}

loadFile();
