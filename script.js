let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let memeImage = document.getElementById('meme-insert');

textInput.onkeyup = function () {
  memeText.innerHTML = textInput.value;
}

let loadFile = function(event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
}