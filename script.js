window.onload = function() {
    function insert() {
        document.getElementById("meme-image").src = window.URL.createObjectURL(this.files[0]);
      }
    let imageMeme = document.getElementById("meme-insert");
    imageMeme.addEventListener("change", insert);

    let textInput  = document.querySelector("#text-input");
    textInput.addEventListener("input", memetext);

    let textmeme = document.querySelector("#meme-text");
    function memetext() {
        textmeme.innerHTML = textInput.value;
    }
}