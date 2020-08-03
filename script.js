// Text handlers
let memeText = document.getElementById("meme-text");
let textInput = document.getElementById("text-input");
let textBtn = document.getElementById("meme-button");

textInput.addEventListener("keyup", function(){
  memeText.innerText = textInput.value;
})
textBtn.addEventListener("keyup", function(){
  memeText.innerText = textInput.value;
})

// Image handlers
let memeImg = document.getElementById("meme-image");
let imgInput = function(event){
  memeImg.src = URL.createObjectURL(event.target.files[0]);
}

// Border styles
let fireBorder = document.getElementById("fire");
let waterBorder = document.getElementById("water");
let earthBorder = document.getElementById("earth");
let normalBorder = document.getElementById("normal");
let memeContainer = document.getElementById("meme-image-container");

fireBorder.addEventListener("click", changeBorder);
waterBorder.addEventListener("click", changeBorder);
earthBorder.addEventListener("click", changeBorder);
normalBorder.addEventListener("click", changeBorder);

function changeBorder(event) {
  let botao = event.target;
  if(botao.id == "fire") {
    memeContainer.style.border = "3px dashed red";
  } else if(botao.id == "water") {
    memeContainer.style.border = "5px double blue";
  } else if(botao.id == "earth") {
    memeContainer.style.border = "6px groove green";
  } else if(botao.id == "normal") {
    memeContainer.style.border = "1px solid black";
  }
}

// Sample images
let sample = document.getElementById("sample-images");

sample.addEventListener("click", useSample);

function useSample(event) {
  let sampleImg = event.target.src;
  memeImg.src = sampleImg;
}

// https://www.w3schools.com/charsets/ref_emoji.asp