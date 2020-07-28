window.onload = function() {
  const textInput = document.getElementById("text-input");
  const memeText = document.getElementById("meme-text");

  textInput.addEventListener("keyup", function() {
    memeText.innerText = textInput.value;
  });

  const memeImage = document.getElementById("meme-image");
  const memeInput = document.getElementById("#meme-insert");

  function selectedImage(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function () {
      URL.revokeObjectURL(memeImage.src);
    };
  }

}