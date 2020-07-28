const inputTexto = document.querySelector('#text-input');
const outputTexto = document.querySelector('#meme-text');
const container = document.querySelector('.meme-container');

inputTexto.addEventListener('input', (e) => {
  outputTexto.innerHTML = e.target.value;
});

const inputImagem = document.querySelector('#meme-insert');
const outputImagem = document.querySelector('#meme-image');

inputImagem.addEventListener('change', (e) => {
  outputImagem.src = URL.createObjectURL(e.target.files[0]);
});

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

fireButton.addEventListener('click', () => {
  container.style.border = 'dashed 3px red';
});
  
waterButton.addEventListener('click', () => {
  container.style.border = 'double 5px blue';
});

earthButton.addEventListener('click', () => {
  container.style.border = 'groove 6px rgb(0, 128, 0)'
});


