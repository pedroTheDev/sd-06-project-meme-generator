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

const memeContainer = document.getElementById('meme-image-container');
const buttons = document.querySelectorAll('.elementos button');
const bt1 = buttons[0];
const bt2 = buttons[1];
const bt3 = buttons[2];

bt1.addEventListener('click', function () {
  memeContainer.style.border = '3px dashed red';
});
bt2.addEventListener('click', function () {
  memeContainer.style.border = '5px double blue';
});
bt3.addEventListener('click', function () {
  memeContainer.style.border = '6px groove green';
});

