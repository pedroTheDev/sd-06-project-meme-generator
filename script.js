const inputDoMeme = document.querySelector('#text-input');
const paragrafoDoMeme = document.querySelector('#meme-text');

const inputDaImagem = document.querySelector('#meme-insert');


inputDoMeme.addEventListener('keyup', function () {
  paragrafoDoMeme.innerText = inputDoMeme.value;
});


inputDaImagem.addEventListener('change', function () {
  const arquivoImagem = inputDaImagem.files[0];
  document.querySelector('img').src = URL.createObjectURL(arquivoImagem);
});
