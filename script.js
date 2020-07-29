window.onload = function(){
    var textInput = document.querySelector("#text-input");
    var textInside = document.querySelector("#meme-text");
    var imageInput = document.querySelector("#meme-insert");
    var imageInside = document.querySelector("#meme-image");
    var fire = document.querySelector("#fire");
    var water = document.querySelector("#water");
    var earth = document.querySelector("#earth");
    var caixa = document.querySelector("#meme-image-container");
    var meme1 = document.querySelector("#meme-1");
    var meme2 = document.querySelector("#meme-2");
    var meme3 = document.querySelector("#meme-3");
    var meme4 = document.querySelector("#meme-4");




    textInput.addEventListener("keyup", function(){
        textInside.innerText = textInput.value;
        textInside.className = "espec-text";
    })

    imageInput.addEventListener("change", function(event){
        imageInside.src = URL.createObjectURL(event.target.files[0])
    })


    fire.addEventListener("click", function(){
        caixa.style.border = "3px dashed red";
    })

    water.addEventListener("click", function(){
        caixa.style.border = "5px double blue";
    })

    earth.addEventListener("click", function(){
        caixa.style.border = "6px groove green";
    })




    meme1.addEventListener("click", function(){
        imageInside.src = "imgs/meme1.png"
    })

    meme2.addEventListener("click", function(){
        imageInside.src = "imgs/meme2.png"
    })

    meme3.addEventListener("click", function(){
        imageInside.src = "imgs/meme3.png"
    })

    meme4.addEventListener("click", function(){
        imageInside.src = "imgs/meme4.png"
    })

}