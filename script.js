 window.onload = function() {
let caixaTexto = document.querySelector("#text-input")
caixaTexto.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = caixaTexto.value
})
let caixaImagem = document.querySelector("#meme-insert")
caixaImagem.addEventListener("change", function(event) {
document.getElementById("meme-image").src =  URL.createObjectURL(event.target.files[0]);
// document.getElementById("meme-image").style.height = "400px"
// document.getElementById("meme-image").style.widht = "400px"
})


 }