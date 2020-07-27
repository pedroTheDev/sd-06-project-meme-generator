const btnFire = document.querySelector("#fire");
const btnWater = document.querySelector("#water");
const btnEarth = document.querySelector("#earth");
const container = document.querySelector("#meme-image-container");

function textWrite() {
  const texto = document.querySelector('#text-input').value;
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = texto;
}

function selectedImage(event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}

function changeFire () {  
  container.style.border="3px dashed red";
  console.log(container);
}

function changeWater () {  
  container.style.border="5px double blue";
  console.log(container);
}

function changeEarth () {  
  container.style.border="6px groove green";
  console.log(container);
}

btnFire.addEventListener('click', changeFire);
btnWater.addEventListener('click', changeWater);
btnEarth.addEventListener('click', changeEarth);
