const inputDoMeme = document.querySelector('#text-input');
const paragrafoDoMeme = document.querySelector('#meme-text');

inputDoMeme.addEventListener('focusout', function () {
  paragrafoDoMeme.innerText = inputDoMeme.value;
});
