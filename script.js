document.addEventListener("keyup", function(){
  let textImputed = document.getElementById("text-input").value;
  let memeText = document.getElementById("meme-text");
  memeText.style.textShadow = '5px 5px 5px black';
  memeText.style.fontSize = "30px";
  memeText.style.color = "white";
  memeText.innerHTML = textImputed;
})

