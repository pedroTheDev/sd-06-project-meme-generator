window.onload = function() {

    let escreverTexto = document.getElementById("text-input");
    let textoMostrado = document.getElementById("meme-text");
    let imagemSelecionada = document.getElementById("meme-insert");
    let imagemMostrada = document.getElementById("meme-image");
    escreverTexto.addEventListener("change", function() {
        textoMostrado.innerHTML = escreverTexto.value;
    });
    imagemSelecionada.addEventListener("change", function() {
        console.log(imagemSelecionada.file);
    });
    

}