 window.onload = function() {
let caixaTexto = document.querySelector("#text-input")
caixaTexto.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = caixaTexto.value
})
let caixaImagem = document.querySelector("#meme-insert")
caixaImagem.addEventListener("input", function(){
document.getElementById("meme-image").src =  URL.createObjectURL(event.target.files[0]);
})


 }