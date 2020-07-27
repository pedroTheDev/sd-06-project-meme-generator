let frase = document.getElementById("text-input"); 
let fraseNaImagem = document.getElementById("meme-text");
function getPhrase(){
  fraseNaImagem.innerHTML = frase.value;
}
frase.addEventListener("keyup",getPhrase);