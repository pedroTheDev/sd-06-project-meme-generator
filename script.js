let loadFile = function(event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
        URL.revokeObjectURL(memeImage.src) // free memory
    }
}
window.onload = function() {
    let x = document.getElementById("text-input");

    function myFourthFunction() {
        document.getElementById("meme-text").innerHTML = x.value;
    }
    x.addEventListener("input", myFourthFunction);


    let redBtn = document.getElementById("fire")

    function changeBorderRed() {
        document.getElementById("meme-image-container").style.border = "3px dashed red";
    }
    redBtn.addEventListener("click", changeBorderRed)

    let blueBtn = document.getElementById("water")

    function changeBorderBlue() {
        document.getElementById("meme-image-container").style.border = "5px double blue";
    }
    blueBtn.addEventListener("click", changeBorderBlue)

    let greenBtn = document.getElementById("earth")

    function changeBorderGreen() {
        document.getElementById("meme-image-container").style.border = "6px groove green";
    }
    greenBtn.addEventListener("click", changeBorderGreen)



}