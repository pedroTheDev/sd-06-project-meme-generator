/*function gerarmeme() {
    let imagemMeme = document.getElementById("imagem-meme");
    //alert(imagemMeme);
    let meme = document.getElementById("upload");
    meme.src = imagemMeme;
    meme.addEventListener('change')   
}*/
let loadFile = function(event) {
    let memeInsert = document.getElementById('meme-insert');
    memeInsert.src = URL.createObjectURL(event.target.files[0]);
    memeInsert.onload = function() {
      URL.revokeObjectURL(memeInsert.src) 
    }
  };
function texto() {
    let textoMeme = document.getElementById("text-input").value;
     document.getElementById("meme-text").innerHTML=textoMeme;
}


  