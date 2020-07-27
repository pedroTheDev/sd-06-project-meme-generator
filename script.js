window.onload = function() {

  let text = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");
  let memeCont = document.querySelector("#meme-image-container");
  let fire = document.querySelector("#fire");
  let water = document.querySelector("#water");
  let earth = document.querySelector("#earth");
  let memeImage = document.getElementById('meme-image');
  let meme1 = document.querySelector("#meme-1");
  let meme2 = document.querySelector("#meme-2");
  let meme3 = document.querySelector("#meme-3");
  let meme4 = document.querySelector("#meme-4");


  text.addEventListener("keyup", function() {
    memeText.innerText = text.value;
  });

  fire.addEventListener("click", function() {
    memeCont.style.border = "3px dashed red";
  });
  
  water.addEventListener("click", function() {
    memeCont.style.border = "5px double blue";
  });

  earth.addEventListener("click", function() {
    memeCont.style.border = "6px groove green";
  });

  meme1.addEventListener("click", function(e) {
    memeImage.src = meme1.src
  });

  meme2.addEventListener("click", function(e) {
    memeImage.src = meme2.src
  });

  meme3.addEventListener("click", function(e) {
    memeImage.src = meme3.src
  });

  meme4.addEventListener("click", function(e) {
    memeImage.src = meme4.src
  });
}

let loadFile = function(event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src)
  }
}