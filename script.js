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


