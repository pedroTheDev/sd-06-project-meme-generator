
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
// Funções para criar o botões que mudam as bordas
let botaoFire = document.querySelector("#fire")
let botaoWater = document.querySelector("#water")
let botaoEarth = document.querySelector("#earth")
let container = document.querySelector("#meme-image-container")
botaoFire.addEventListener("click", function() {
    container.style.border = "3px red dashed"
})
botaoWater.addEventListener("click", function() {
    container.style.border = "5px rgb(0, 0, 255) double"
})
botaoEarth.addEventListener("click", function() {
    container.style.border = "6px rgb(0, 128, 0) groove"
})

// funções para inserir memes pré prontos
let meme1 = document.querySelector("#meme-1")
meme1.addEventListener("click", function() {
    document.getElementById("meme-image").src = "imgs/meme1.png"
    })
let meme2 = document.querySelector("#meme-2")
meme2.addEventListener("click", function() {
    document.getElementById("meme-image").src = "imgs/meme2.png"
    })
let meme3 = document.querySelector("#meme-3")
meme3.addEventListener("click", function() {
    document.getElementById("meme-image").src = "imgs/meme3.png"
     })
let meme4 = document.querySelector("#meme-4")
meme4.addEventListener("click", function() {
    document.getElementById("meme-image").src = "imgs/meme4.png"
    }) 