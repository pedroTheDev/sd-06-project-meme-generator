window.onload = function() {

  let text = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");

  text.addEventListener("keyup", function() {
    memeText.innerText = text.value;
  })

}