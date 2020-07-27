const txtDigitado = document.querySelector('#text-input');
const txtImage = document.querySelector('#meme-text');

function digitadoTxt() {
  txtImage.innerHTML = txtDigitado.value;
}
txtDigitado.addEventListener('keyup', digitadoTxt);

const inputImagem = document.querySelector('#meme-insert');
function visualizarImg(event) {
  const buscaImg = document.querySelector('img');
  buscaImg.src = URL.createObjectURL(event.target.files[0]);
  buscaImg.onload = function () {
    URL.revokeObjectURL(buscaImg.src);
  }
}
inputImagem.addEventListener('change', visualizarImg);
