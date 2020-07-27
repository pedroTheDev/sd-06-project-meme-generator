//Variables
let userText = document.getElementById("text-input");
let containerText = document.getElementById("meme-text");
let insertMeme = document.getElementById("meme-insert");
//let buttonInsertMeme = document.getElementsByTagName("btn-meme-text");
//let uploadedMeme = document.getElementsByTagName("meme-image");"


//Receive user text, and write it on the image;
userText.addEventListener("keyup", function() {
    containerText.innerHTML = userText.value;
});
//buttonInsertMeme.addEventListener("click", function() {
    //containerText.innerHTML = userText.value;
//})

//Upload user image
insertMeme.addEventListener("change", function() {
    img.id = "meme-image";
    img.src = URL.createObjectURL(event.target.files[0]);
})


