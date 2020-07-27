window.onload = function() {

  let text = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");

  text.addEventListener("keyup", function() {
    memeText.innerText = text.value;
  });

  

}

let loadFile = function(event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src)
  }
}