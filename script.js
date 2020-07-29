function printTexto(){
    let textoEscrito = document.getElementById("text-input");
    let textoMeme = document.getElementById("meme-text");
    let memeInsert= document.getElementById("meme-insert")

    textoEscrito.addEventListener('change', function(){
        const texto = textoEscrito.value;
        if(texto.length >60){
            alert('Limite de caracteres ultrapassado!');
        }else{
            textoMeme.innerHTML = texto;
        }
    }
    )
   
}
let imgMeme = function(event) {
    var memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) 
    }
};
