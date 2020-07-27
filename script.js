window.onload = function () {
  const textInput = document.getElementById('text-input');
  const memeInsert = document.getElementById('meme-insert');
  let memeImage = document.getElementById('meme-image');

  textInput.addEventListener('keyup', function () {
    document.getElementById('meme-text').innerText = textInput.value;
  });

  memeInsert.addEventListener('change', function (event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    console.log(memeImage.src);
    memeImage.onload = function () {
      URL.revokeObjectURL(memeImage.src);
    }
    console.log(memeImage.src);
  })
};
