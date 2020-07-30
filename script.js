function addImagem(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

function teclado() {
  const texto = document.getElementById('meme-text');
  const textoInput = document.getElementById('text-input');
  texto.innerHTML = textoInput.value;
}

function changeMolduraFire() {
  const container = document.getElementById('meme-image-container');
  container.style.border = '3px dashed red';
}

function changeMolduraWater() {
  const container = document.getElementById('meme-image-container');
  container.style.border = '5px double blue';
}

function changeMolduraEarth() {
  const container = document.getElementById('meme-image-container');
  container.style.border = '6px groove green';
}

window.onload = function () {
  const textoInput = document.getElementById('text-input');
  textoInput.addEventListener('keyup', teclado);

  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', addImagem);

  const fireButton = document.getElementById('fire');
  fireButton.addEventListener('click', changeMolduraFire);

  const waterButton = document.getElementById('water');
  waterButton.addEventListener('click', changeMolduraWater);

  const earthButton = document.getElementById('earth');
  earthButton.addEventListener('click', changeMolduraEarth);
};
