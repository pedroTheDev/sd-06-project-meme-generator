window.onload = function() {
    function upload() {
        document.getElementById("meme-image").src = window.URL.createObjectURL(this.files[0]);
      }
    let upImage = document.getElementById("meme-insert");
    upImage.addEventListener("change", upload);
    
    let textShow = document.querySelector("#meme-text");
    function showText() {
        textShow.innerHTML = textoMeme.value; 
    }
    let textoMeme = document.querySelector("#text-input");
    textoMeme.addEventListener("keyup", showText)
}