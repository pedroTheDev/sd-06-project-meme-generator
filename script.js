/*function gerarmeme() {
    let imagemMeme = document.getElementById("imagem-meme");
    //alert(imagemMeme);
    let meme = document.getElementById("upload");
    meme.src = imagemMeme;
    meme.addEventListener('change')   
}*/
var loadFile = function(event) {
    var upload = document.getElementById('upload');
    upload.src = URL.createObjectURL(event.target.files[0]);
    upload.onload = function() {
      URL.revokeObjectURL(upload.src) // free memory
    }
  };
function texto() {
    let textoMeme = document.getElementById("text-input").value;
     document.getElementById("meme-text").innerHTML=textoMeme;
}


  