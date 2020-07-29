let textInput=document.getElementById("text-input");
let memeText=document.getElementById("meme-text");
textInput.addEventListener("input", textInsert);
function textInsert(e) {
  memeText.textContent=e.target.value;
}
let memeInsert = function(event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src);
  }
}