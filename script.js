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

paragrafo.style.textShadow = '5px 5px 5px black';
paragrafo.style.fontSize = '30px';
paragrafo.style.color = 'white';

const container = document.querySelector('#meme-image-container');
function fire() {
  container.style.border = '3px dashed red';
}
function water() {
  container.style.border = '5px double blue';
}
function earth() {
  container.style.border = '6px groove green';
}
