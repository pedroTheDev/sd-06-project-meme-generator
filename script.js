/*function gerarmeme() {
    let imagemMeme = document.getElementById("imagem-meme");
    //alert(imagemMeme);
    let meme = document.getElementById("upload");
    meme.src = imagemMeme;
    meme.addEventListener('change')   
}*/
let loadFile = function(event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) 
    }
  };
function texto() {
    let textoMeme = document.getElementById("text-input").value;
     document.getElementById("meme-text").innerHTML=textoMeme;
}


  