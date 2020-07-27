// Req 1
const userTextInput = document.querySelector("#text-input");
const memeTextInput = document.querySelector("#meme-text");

userTextInput.addEventListener("input", function () {
  memeTextInput.innerText = userTextInput.value;
})

function uploadMemeImg() {
  document.getElementById('meme-image').src = window.URL.createObjectURL(this.file[0]);
}

let uploadImg = document.getElementById('meme-insert');
uploadImg.addEventListener('change', uploadMemeImg);