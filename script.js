const inputTexto = document.querySelector('#text-input');
const outputTexto = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const imgView = document.querySelector('#meme-image');

function writeText() {
    outputTexto.innerHTML = inputTexto.value;
}
inputTexto.addEventListener('keyup', writeText);

function selecionaImg() {
    imgView.src = window.URL.createObjectURL(inputImg.files[0]);
}
inputImg.addEventListener('change', selecionaImg);