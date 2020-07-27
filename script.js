function gerarmeme() {
    let imagemMeme = document.getElementById("imagem-meme");
    
    alert(imagemMeme);
    let meme = document.getElementById("upload");
    meme.src = imagemMeme;
   
}
function texto() {
    let textoMeme = document.getElementById("text-input").value;
     document.getElementById("meme-text").innerHTML=textoMeme;
}