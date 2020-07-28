let loadFile = function(event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
        URL.revokeObjectURL(memeImage.src) // free memory
    }
}

function myFunction() {
    var x = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = x;
}