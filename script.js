window.onload = function() {

    let escreverTexto = document.getElementById("text-input");
    let textoMostrado = document.getElementById("meme-text");
    let imagemSelecionada = document.getElementById("meme-insert");
    let imagemMostrada = document.getElementById("meme-image");
    
    escreverTexto.addEventListener("input", function() {
        textoMostrado.innerText = escreverTexto.value;
    });
    imagemSelecionada.addEventListener("change", function() {
        console.log("função chamada");
        let reader = new FileReader();
        reader.onload = function(){
            imagemMostrada.src = reader.result;
        };        
        reader.readAsDataURL(imagemSelecionada.files[0]);
    });      
}