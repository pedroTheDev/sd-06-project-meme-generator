const inputDoMeme = document.querySelector('#text-input');
const paragrafoDoMeme = document.querySelector('#meme-text');

const inputDaImagem = document.querySelector('#meme-insert');
const imagemDoMeme = document.querySelector('#meme-image')

inputDoMeme.addEventListener('keyup', function () {
  paragrafoDoMeme.innerText = inputDoMeme.value;
});
inputDoMeme.addEventListener('change', function () {
  paragrafoDoMeme.innerText = inputDoMeme.value;
});

inputDaImagem.addEventListener('change', function () {
  let arquivoImagem = inputDaImagem.files[0];
  document.querySelector('img').src = URL.createObjectURL(arquivoImagem)
});
