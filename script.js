function addImagem(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

function teclado() {
  const texto = document.getElementById('meme-text');
  const textoInput = document.getElementById('text-input');
  texto.innerHTML = textoInput.value;
}

window.onload = function () {
  const textoInput = document.getElementById('text-input');
  textoInput.addEventListener('keyup', teclado);

  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', addImagem);
};
