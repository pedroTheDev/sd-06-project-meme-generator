let textoDoMeme = document.querySelector('#meme-text');
textoDoMeme.addEventListener('input', function() {
  imgText.innerText = textoDoMeme.value;
})
