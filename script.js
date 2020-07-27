// Req 1
let userTextInput = document.querySelector("#text-input");
let memeTextInput = document.querySelector("#meme-text");

userTextInput.addEventListener("input", function(){
    memeTextInput.innerText = userTextInput.value;
})

// Req 6
let personalizeSection = document.querySelector(".personalize-section");
let fireButton = document.querySelector("#fire");
let waterButton = document.querySelector("#water");
let earthButton = document.querySelector("#earth");
let memeImgContainer = document.querySelector("#meme-image-container");

personalizeSection.addEventListener("click", function(event){
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
        memeImgContainer.style.borderColor = "rgb(0,255,0)";
    }
})