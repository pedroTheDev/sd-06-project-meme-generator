const userTextInput = document.querySelector('#text-input');
const memeTextInput = document.querySelector('#meme-text');
const abrirImagem = document.getElementById('meme-insert');
const imagemAberta = document.getElementById('meme-image');
const bordaStyle = document.getElementById('meme-image-container');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');

/* ********************************************************* */
userTextInput.addEventListener('input', function () {
  memeTextInput.innerText = userTextInput.value;
});

/* ********************************************************* */
function abrirImage() {
  imagemAberta.src = window.URL.createObjectURL(abrirImagem.files[0]);
}
abrirImagem.addEventListener('change', abrirImage);

/* ********************************************************* */
fireBtn.addEventListener('click', function () {
  bordaStyle.style.border = '3px dashed red';
});

/* ********************************************************* */
waterBtn.addEventListener('click', function () {
  bordaStyle.style.border = '5px double blue';
});

earthBtn.addEventListener('click', function () {
  bordaStyle.style.border = '6px groove green';
});

