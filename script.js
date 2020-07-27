let textoDoMeme = document.querySelector('#text-input');
textoDoMeme.addEventListener('input', function () {
  let texto = document.querySelector('#meme-text');
  texto.innerHTML = textoDoMeme.value;
});
let loadImage = function(event) {
  let output = document.querySelector('#output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src);
  }
}