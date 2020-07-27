const txtDigitado = document.querySelector('#text-input');
const txtImage = document.querySelector('#meme-text');

function digitadoTxt() {
  txtImage.innerHTML = txtDigitado.value;
}
txtDigitado.addEventListener('keyup', digitadoTxt);
