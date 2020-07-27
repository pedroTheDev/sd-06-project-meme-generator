window.onload = function() {

  let userTextInput = document.getElementById("text-input");
  let memeTextInputed = document.getElementById("meme-text");

  userTextInput.addEventListener("keyup", function() {
    memeTextInputed.innerText = userTextInput.value;
  });
}