window.onload = function () {
  const textInput = document.getElementById('text-input');
  const memeInsert = document.getElementById('meme-insert');
  const memeImage = document.getElementById('meme-image');

  textInput.addEventListener('keyup', function () {
    document.getElementById('meme-text').innerText = textInput.value;
  });

  memeInsert.addEventListener('change', function (event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function () {
      URL.revokeObjectURL(memeImage.src);
    }
  });
};
