
// função para pegar o valor digitado no input e jogar no campo de texto do meme
let caixaTexto = document.querySelector("#text-input")
caixaTexto.addEventListener("keyup", function(){
    document.querySelector("#meme-text").innerHTML = caixaTexto.value
})

// função para pegar o upload da imagem e carregar dentro do container
let caixaImagem = document.querySelector("#meme-insert")
caixaImagem.addEventListener("change", function(event) {
document.getElementById("meme-image").src = 
URL.createObjectURL(event.target.files[0])
})

let botaoFire = document.querySelector("#fire")
let botaoWater = document.querySelector("#water")
let botaoEarth = document.querySelector("#earth")
let container = document.querySelector("#meme-image-container")
botaoFire.addEventListener("click", function() {
    container.style.border = "3px red dashed"
})
botaoWater.addEventListener("click", function() {
    container.style.border = "5px blue double"
})
botaoEarth.addEventListener("click", function() {
    container.style.border = "6px green groove"
})