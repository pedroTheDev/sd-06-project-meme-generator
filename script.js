var textInput = document.querySelector("#text-input");
var textInside = document.querySelector("#meme-text");
var imageInput = document.querySelector("#meme-insert");
var imageInside = document.querySelector("#meme-image");

function changeText() {
  textInside.innerText = textInput.value;
  textInside.className = "meme-text";
}
textInput.addEventListener("keyup", changeText)

function changeImage(){
  imageInside.src = window.URL.createObjectURL(imageInput.files[0]);
  // imageInside.innerText = imageInput.value;
  // imageInside.innerText = document.querySelector("meme-image");
}
imageInput.addEventListener("change", changeImage);
