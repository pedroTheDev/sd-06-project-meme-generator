//variaveis
let memeText = document.getElementById("meme-text");
let textInput = document.getElementById("text-input");
let textBtn = document.getElementById("meme-button");
let memeImg = document.getElementById("meme-image");

textInput.addEventListener("keyup", function(){
  memeText.innerHTML = textInput.value
})

let imgInput = function(event){
  memeImg.src = URL.createObjectURL(event.target.files[0])
}