let textoDoMeme = document.querySelector('#text-input');
textoDoMeme.addEventListener('input', function() {
  let texto = document.querySelector('#meme-text');
  texto.innerHTML = textoDoMeme.value;
})
