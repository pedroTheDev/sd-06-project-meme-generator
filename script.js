// Req 1
let userTextInput = document.querySelector("#text-input");
let memeTextInput = document.querySelector("#meme-text");

userTextInput.addEventListener("input", function(){
    memeTextInput.innerText = userTextInput.value;
})

// 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
let memeImage = document.querySelector("#meme-image-input")

function loadFile(event){
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target);
    memeImage.onload = function(){  
        URL.revokeObjectURL(memeImage.src);
    }
}

// Req 6
let personalizeColor = document.querySelector(".personalize-color");
let fireButton = document.querySelector("#fire");
let waterButton = document.querySelector("#water");
let earthButton = document.querySelector("#earth");
let memeImgContainer = document.querySelector("#meme-image-container");

personalizeColor.addEventListener("click", function(event){
    if (event.target == fireButton){
        memeImgContainer.style.borderWidth = "3px";
        memeImgContainer.style.borderStyle = "dashed";
        memeImgContainer.style.borderColor = "rgb(255,0,0)";
    } else if (event.target == waterButton){
        memeImgContainer.style.borderWidth = "5px";
        memeImgContainer.style.borderStyle = "double";
        memeImgContainer.style.borderColor = "rgb(0,0,255)";
    } else if (event.target == earthButton){
        memeImgContainer.style.borderWidth = "6px";
        memeImgContainer.style.borderStyle = "groove";
        memeImgContainer.style.borderColor = "rgb(0,128,0)";
    }
})

// Req 7
let memeOne = document.querySelector("#meme-1");
let memeTwo = document.querySelector("#meme-2");
let memeThree = document.querySelector("#meme-3");
let memeFour = document.querySelector("#meme-4");
let personalizeImage = document.querySelector(".personalize-image")

personalizeImage.addEventListener("click", function(event){
    console.log(event.target.src);
    memeImage.src = event.target.src;
})
