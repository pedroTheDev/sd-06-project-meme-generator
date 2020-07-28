function printTexto(){
    let texto = document.querySelector("#text-input")[value];
    let textoMeme = document.querySelector("#meme-text");
    textoMeme.innerHTML = texto;
}
let imgMeme = function(event) {
    var memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) 
    }
};
