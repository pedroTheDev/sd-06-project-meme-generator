//Elementos 
let memeText = document.getElementById("meme-text");  
let textInput = document.getElementById("text-input");
let memeImage = document.getElementById("meme-image");
let memeInsert = document.getElementById("meme-insert");

//Eventos
textInput.addEventListener('keyup', escreverTexto);
function escreverTexto() {
    memeText.innerHTML = textInput.value;
}


memeInsert.addEventListener('change', adicionandoFoto);
function adicionandoFoto() {
    memeImage.src = window.URL.createObjectURL(memeInsert.files[0]);
   
    
}
 



