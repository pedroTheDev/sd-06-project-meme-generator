window.onload = function() {
    function upload() {
        document.getElementById("meme-image").src = window.URL.createObjectURL(this.files[0]);
      }
    let upImage = document.getElementById("meme-insert");
    upImage.addEventListener("change", upload);
    
    let textoMeme = document.querySelector("#text-input");
    textoMeme.addEventListener("keyup", showText);

    let textShow = document.querySelector("#meme-text");
    function showText() {
        textShow.innerHTML = textoMeme.value; 
    }
    
    let containerImagem = document.querySelector("#meme-image-container");
    let btn1 = document.querySelector("#fire");
    let btn2 = document.querySelector("#water");
    let btn3 = document.querySelector("#earth");

    btn1.addEventListener("click", function() {
        btn1.style.backgroundColor = "red";
        containerImagem.style.border = "3px dashed red";
    })

    btn2.addEventListener("click", function() {
        btn2.style.backgroundColor = "blue";
        containerImagem.style.border = "5px double blue";
    })

    btn3.addEventListener("click", function() {
        btn3.style.backgroundColor = "green";
        containerImagem.style.border = "6px groove green";
    })
}