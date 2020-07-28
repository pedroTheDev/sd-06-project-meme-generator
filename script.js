
function loadImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
      const saida = document.getElementById('meme-image');
    saida.src = reader.result;
   }
  if (reader) {
    reader.readAsDataURL(event.target.files[0]);
  }
}
function loadText() {
  const inputText = document.querySelector('#text-input').value;
  const pText = document.querySelector('#meme-text');
  pText.innerHTML = inputText;
}