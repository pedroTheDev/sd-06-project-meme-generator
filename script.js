let textoDigitado = document.querySelector("#text-input");
let textoNaImagem = document.querySelector("#meme-text");

textoDigitado.addEventListener("keyup", function(){
  textoNaImagem.innerHTML = this.value;
})