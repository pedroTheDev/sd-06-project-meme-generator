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

let botaoFire = document.querySelector('#fire');
let container = document.querySelector('#meme-image-container');

botaoFire.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

let botaoWater = document.querySelector('#water');

botaoWater.addEventListener('click', function () {
  container.style.border = '5px double blue';
});

let botaoEarth = document.querySelector('#earth');

botaoEarth.addEventListener('click', function () {
  container.style.border = '6px groove green';
});