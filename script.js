const inputTexto = document.querySelector('#text-input');
const outputTexto = document.querySelector('#meme-text');

inputTexto.addEventListener('input', function() {
outputTexto.innerHTML = inputTexto.value;
});
