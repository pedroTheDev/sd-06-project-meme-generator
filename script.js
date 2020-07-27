//Elementos 
let memeText = document.getElementById("meme-text");  
let textInput = document.getElementById("text-input");

//Eventos
textInput.addEventListener('keyup', escreverTexto);

function escreverTexto() {
    memeText.innerHTML = textInput.value;
}

 



