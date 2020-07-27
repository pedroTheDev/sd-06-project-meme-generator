let textoDoMeme = document.querySelector('#text-input');
let inputImg = document.querySelector('#meme-insert');
textoDoMeme.addEventListener('input', function () {
  let texto = document.querySelector('#meme-text');
  texto.innerHTML = textoDoMeme.value;
});
function visualizarImg(event) {
  let preview = document.querySelector('img');
  preview.src = URL.createObjectURL(event.target.files[0]);
  preview.onload = function() {
    URL.revokeObjectURL(preview.src);
  }
}
inputImg.addEventListener('change', visualizarImg)
