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
}