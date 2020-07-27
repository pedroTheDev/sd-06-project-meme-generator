const textInput = document.getElementById("body-input");
const memeText = document.getElementById("meme-text");

textInput.addEventListener("keyup", function(){
    memeText.innerText = textInput.value;
});






//let memeText = document.getElementById("meme-text");
//let textInput = document.getElementById("text-input");
//let textBtn = document.getElementById("meme-button");

//textInput.addEventListener("keyup", function(){
  //memeText.innerText = textInput.value;
//})
//textBtn.addEventListener("keyup", function(){
  //memeText.innerText = textInput.value;
//})

// Image handlers
//let memeImg = document.getElementById("meme-image");
//let imgInput = function(event){
  //memeImg.src = URL.createObjectURL(event.target.files[0]);
//}