window.onload = function() {

  let text = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");
  let memeCont = document.querySelector("#meme-image-container");
  let fire = document.querySelector("#fire");
  let water = document.querySelector("#water");
  let earth = document.querySelector("#earth");

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

}

let loadFile = function(event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src)
  }
}