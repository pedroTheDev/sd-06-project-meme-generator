let textoDoMeme = document.querySelector('#text-input');
let inputImg = document.querySelector('#meme-insert');
textoDoMeme.addEventListener('input', function () {
  let texto = document.querySelector('#meme-text');
  texto.innerHTML = textoDoMeme.value;
});
function visualizarImg() {
  let image = document.querySelector('input[name=imagem]').files[0];
  let preview = document.querySelector('img')
  let reader = new FileReader();
  reader.onloaded = function() {
    preview.src = reader.result;
  }
  if(image) {
    reader.readAsDataURL(image);
  } else {
    preview.src="";
  }
}
inputImg.addEventListener('change', visualizarImg)