let loadFile = function(event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
        URL.revokeObjectURL(memeImage.src) // free memory
    }
}

function myFunction() {
    var x = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = x;
}


/*let caixaUm = document.querySelector(".caixa1")
let textBtn = document.querySelector(".botao1")
let caixaTexto = document.querySelector(".caixa-texto")

function changeText() {
    caixaUm.innerHTML = caixaTexto.value
}
textBtn.addEventListener("click", changeText)*/