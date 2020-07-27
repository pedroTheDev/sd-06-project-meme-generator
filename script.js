window.onload = function() {    
    let textoInput = document.getElementById('text-input');
    textoInput.addEventListener('keyup', teclado); 

    let memeInsert = document.getElementById('meme-insert');
    memeInsert.addEventListener('change', addImagem);
}

function teclado() {
    let texto = document.getElementById('meme-text');
    let textoInput = document.getElementById('text-input');
    texto.innerHTML = textoInput.value;
}

function addImagem() {
    let memeInsert = document.getElementById('meme-insert');
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}
