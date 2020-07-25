 window.onload = function() {
let caixaTexto = document.querySelector("#text-input")
caixaTexto.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = caixaTexto.value
})









 }