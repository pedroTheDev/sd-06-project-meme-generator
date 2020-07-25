window.onload = function() {
  let memeText = document.querySelector("#meme-text")
  let textInput = document.querySelector("#text-input")

  textInput.addEventListener("input", function(event) {

    memeText.innerText = textInput.value
  })
}
