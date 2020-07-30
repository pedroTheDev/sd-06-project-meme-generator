    
window.onload=function(){
    const textoEscrito = document.getElementById("text-input");
    const textoMeme = document.getElementById("meme-text");
    const memeInsert = document.getElementById("meme-insert");
    const memeImg = document.getElementById("meme-image");

    textoEscrito.addEventListener('input', function() {
        textoMeme.innerHTML = textoEscrito.value
    })
    memeInsert.addEventListener('change', function(event) {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
    memeImg.onload = function() {
      URL.revokeObjectURL(memeImg.src);
    };
    });
};
