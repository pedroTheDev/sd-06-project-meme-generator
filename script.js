//inciando

//meme-image

function readMemeImage() {

    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
      
    reader.onloadend = function () {
        preview.src = reader.result;
    }
      
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}



//meme-text

function onChangeText () {

    let textInput = document.querySelector("#text-input");
    
    document.querySelector("#meme-text").innerText = textInput.value;
}
let textInput = document.querySelector("#text-input");
textInput.addEventListener("input", onChangeText);


//avatar-buttons

//fire-button

function changeFireBorder(){
    document.getElementById("meme-image-container").style.border = "3px dashed rgb(255, 0, 0)";
}

//

let fireBorder = document.getElementById("fire");
fireBorder.addEventListener("click", function(){
    changeFireBorder();
})



//water-button

function changeWaterBorder(){
    document.getElementById("meme-image-container").style.border = "5px double rgb(0, 0, 255)";
}

//

let waterBorder = document.getElementById("water");
waterBorder.addEventListener("click", function(){
    changeWaterBorder();
})



//earth-button

function changeEarthBorder(){
    document.getElementById("meme-image-container").style.border = "6px groove rgb(0, 128, 0)";
}

//

let earthBorder = document.getElementById("earth");
earthBorder.addEventListener("click", function(){
    changeEarthBorder();
})


//meme01

let meme1Button = document.getElementById("meme-1");
let memeImg = document.getElementById("meme-image");

meme1Button.addEventListener("click", function(){
    memeImg.src = meme1Button.src
})

//meme02

let meme2Button = document.getElementById("meme-2");


meme2Button.addEventListener("click", function(){
    memeImg.src = meme2Button.src
})

//meme03

let meme3Button = document.getElementById("meme-3");


meme3Button.addEventListener("click", function(){
    memeImg.src = meme3Button.src
})

//meme03

let meme4Button = document.getElementById("meme-4");


meme4Button.addEventListener("click", function(){
    memeImg.src = meme4Button.src
})

