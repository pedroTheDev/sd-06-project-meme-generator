const inputTexto = document.querySelector('#text-input');
const outputTexto = document.querySelector('#meme-text');

inputTexto.addEventListener('input', (e) => {
  outputTexto.innerHTML = e.target.value;
});

const inputImagem = document.querySelector('#meme-insert');
const outputImagem = document.querySelector('#meme-image');

inputImagem.addEventListener('change', (e) => {
  outputImagem.src = URL.createObjectURL(e.target.files[0]);
});
