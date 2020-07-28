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
    document.getElementById("meme-image").style.border = "3px dashed red";
}

//

let fireBorder = document.getElementById("fire");
fireBorder.addEventListener("click", function(){
    changeFireBorder();
})



//water-button

function changeWaterBorder(){
    document.getElementById("meme-image").style.border = "5px double blue";
}

//

let waterBorder = document.getElementById("water");
waterBorder.addEventListener("click", function(){
    changeWaterBorder();
})



//earth-button

function changeEarthBorder(){
    document.getElementById("meme-image").style.border = "6px groove green";
}

//

let earthBorder = document.getElementById("earth");
earthBorder.addEventListener("click", function(){
    changeEarthBorder();
})


//earth-button

function changeAirBorder(){
    document.getElementById("meme-image").style.border = "3px dotted yellow";
}

//

let airBorder = document.getElementById("air");
airBorder.addEventListener("click", function(){
    changeAirBorder();
})

//