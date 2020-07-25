 window.onload = function() {
let caixaTexto = document.querySelector("#text-input")
caixaTexto.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = caixaTexto.value
})
let caixaImagem = document.querySelector("#meme-insert")
caixaImagem.addEventListener("input", function(){
document.getElementById("meme-image").src = caixaImagem.files[0].name
console.log(document.getElementById("meme-image"))


})







 }