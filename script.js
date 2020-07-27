function gerarmeme() {
    let imagemMeme = document.getElementById("imagem-meme").files[0];
    alert(imagemMeme);
    let meme = document.getElementById("upload");
    meme.src = imagemMeme;
   
}
function texto() {
    let textoMeme = document.getElementById("text-input").value;
     document.getElementById("meme-text").innerHTML=textoMeme;
}