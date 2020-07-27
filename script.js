let textoDoMeme = document.querySelector('#text-input');
textoDoMeme.addEventListener('input', function () {
  let texto = document.querySelector('#meme-text');
  texto.innerHTML = textoDoMeme.value;
});
function visualizarImg() {
  let image = document.querySelector('input[name=imagem').files[0];
  let preview = document.querySelector('img')
  let reader = new FileReader();
  reader.onloadend = function() {
    preview.src = reader.result;
  }
  if(imagem) {
    reader.readAsDataURL(image);
  } else {
    visualizar.src="";
  }
}