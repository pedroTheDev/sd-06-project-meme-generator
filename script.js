const input = document.getElementById('text-input');
const paragrafo = document.getElementById('meme-text');
function showText() {
  paragrafo.innerText = input.value;
}
input.addEventListener('keyup', showText);
function showImage() {
  const upload = document.getElementById('meme-image');
  const inserido = document.getElementById('meme-insert').value;
  upload.src = inserido;
}
document.getElementById('meme-insert').addEventListener('change', showImage);
paragrafo.style.textShadow = '5px 5px 5px black';
paragrafo.style.fontSize = "30px";
paragrafo.style.color = 'white';

