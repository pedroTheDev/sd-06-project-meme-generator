window.onload = function() {

  const memeText = document.getElementById("meme-text");

  const memeTextInput = document.getElementById("text-input");

  memeTextInput.addEventListener("keyup", function() {
    memeText.innerText = memeTextInput.value
  })




}