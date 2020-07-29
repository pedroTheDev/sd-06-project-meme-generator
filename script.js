var textInput = document.querySelector("#text-input");
var textInside = document.querySelector("#meme-text");
var imageInput = document.querySelector("#meme-insert");
var imageInside = document.querySelector("#meme-image");

function changeText() {
  textInside.innerText = textInput.value;
  textInside.className = "meme-text";
}
textInput.addEventListener("keyup", changeText)


var loadFile = function(event) {
  var output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

