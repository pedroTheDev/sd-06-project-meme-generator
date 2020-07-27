window.onload = function() {

    let escreverTexto = document.getElementById("text-input");
    let textoMostrado = document.getElementById("meme-text");
    escreverTexto.addEventListener("change", function() {
        document.getElementById("meme-text").innerHTML = document.getElementById("text-input").value;
    });
    

}