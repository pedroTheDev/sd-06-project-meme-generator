let textoDoMeme = document.querySelector('#text-input');
let inputImg = document.querySelector('#meme-insert');

textoDoMeme.addEventListener('input', function (event) {
  let texto = document.querySelector('#meme-text');
  texto.innerHTML = event.target.value;
});

function visualizarImg(event) {
  let preview = document.querySelector('img');
  preview.style.backgroundColor
  preview.src = URL.createObjectURL(event.target.files[0]);
  preview.onload = function() {
    URL.revokeObjectURL(preview.src);
  }
}

inputImg.addEventListener('change', visualizarImg)
