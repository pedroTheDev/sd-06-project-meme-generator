// criar variáveis 
const textInput = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");
const memeImage = document.getElementById("meme-image");
const memeInsert = document.getElementById("meme-isert");

// criar funções 

// função para inserir frase na imagem:
function iserirfrase(){
    memeText.innerHTML = textInput.Value;
}
textInput.addEventListener("keyup", iserirfrase);

// função upload imagem 
function oploadimage(){
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}
memeInsert.addEventListener("change", oploadimage);