const inputTexto = document.querySelector('#text-input');
const outputTexto = document.querySelector('#meme-text');

inputTexto.addEventListener('input', (e) => {
  outputTexto.innerHTML = e.target.value;
});
