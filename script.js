//Receive user text, and write it on the image;
let userText = document.getElementById("text-input");
let containerText = document.getElementById("meme-text");
userText.addEventListener("keyup", function() {
    containerText.innerHTML = userText.value;
});

//Upload user image
let insertMeme = document.getElementById("meme-image");
//let uploadedMeme = document.getElementsByTagName("meme-image")[0];
let uploadedMeme = function(event) {
    insertMeme.src = URL.createObjectURL(event.target.files[0]);
}



