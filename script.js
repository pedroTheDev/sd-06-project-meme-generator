window.onload = function() {
    function upload() {
        document.getElementById("meme-image").src = window.URL.createObjectURL(this.files[0]);
      }
    let upImage = document.getElementById("meme-insert");
    upImage.addEventListener("change", upload);
    
    let textoMeme = document.querySelector("#text-input");
    textoMeme.addEventListener("input", showText);

    let textShow = document.querySelector("#meme-text");
    function showText() {
        textShow.innerHTML = textoMeme.value; 
    }
    
    let containerImagem = document.querySelector("#meme-image-container");
    let btn1 = document.querySelector("#fire");
    let btn2 = document.querySelector("#water");
    let btn3 = document.querySelector("#earth");

    btn1.addEventListener("click", function() {
        containerImagem.style.border = "3px dashed rgb(255, 0, 0)";
    })

    btn2.addEventListener("click", function() {
        containerImagem.style.border = "5px double rgb(0, 0, 255)";
    })

    btn3.addEventListener("click", function() {
        containerImagem.style.border = "6px groove rgb(0, 128, 0)";
    })

    let meme1 = document.querySelector("#meme-1");
    let meme2 = document.querySelector("#meme-2");
    let meme3 = document.querySelector("#meme-3");
    let meme4 = document.querySelector("#meme-4");

    meme1.addEventListener("click", function() {
        document.getElementById("meme-image").src = meme1.src;
    });
    meme2.addEventListener("click", function() {
        document.getElementById("meme-image").src = meme2.src;
    });
    meme3.addEventListener("click", function() {
        document.getElementById("meme-image").src = meme3.src;
    });
    meme4.addEventListener("click", function() {
        document.getElementById("meme-image").src = meme4.src;
    });
}