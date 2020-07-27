// Interação com o input de TEXTO
// 1. Elementos para acessar
let inputText = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
// 2. Pega o input e mostra na tela
let userTextMeme = "";
function getTextInput() {
    userTextMeme = inputText.value;
    memeText.innerHTML = userTextMeme;
}
inputText.addEventListener("keyup", getTextInput);

// Interação com o input da IMAGEM
