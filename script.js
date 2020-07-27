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

personalizeSection.addEventListener("click", function(event){
    if (event.target == fireButton){
        console.log("fire");
    } else if (event.target == waterButton){
        console.log("water");
    } else if (event.target == earthButton){
        console.log("earth");
    }
})