window.onload = function() {

    let caixaTexto = document.querySelector("#text-input")
    let imgTexto = document.querySelector("#meme-text")

    caixaTexto.addEventListener("keyup", function(){
        document.querySelector("#meme-text").innerHTML = caixaTexto.value
    })

}