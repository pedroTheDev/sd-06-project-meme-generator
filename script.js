function textWrite() {
  const texto = document.querySelector('#text-input').value;
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = texto;
}

function selectedImage(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}
