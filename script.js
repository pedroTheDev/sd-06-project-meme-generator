window.onload = function() {

let textInPut = document.querySelector("#text-input");
textInPut.addEventListener("keyup", function(){
    let textOutPut = document.querySelector("#meme-text");
    textOutPut.innerHTML = textInPut.value;    
})
    
let imageInPut = document.querySelector("#meme-insert");

imageInPut.addEventListener("change", function(event) {
    
    document.getElementById("meme-image").src = URL.createObjectURL(event.target.files[0]);
    // let imageOutPut = document.getElementById("meme-image");
    // imageOutPut.src = URL.createObjectURL(event.target.files[0]);
    
         
})

}