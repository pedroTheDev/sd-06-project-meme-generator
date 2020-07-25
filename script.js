const input = document.getElementById('text-input');
const paragrafo = document.getElementById('meme-text');
function showText() {
  paragrafo.innerText = input.value;
}
input.addEventListener('keyup', showText);
function showImage() {
    let upload = document.getElementById('meme-image');
    let inserido = document.getElementById('meme-insert').value;
     upload.src = inserido;
}
