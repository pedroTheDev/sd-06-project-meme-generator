window.onload = function () {
    const textInput = document.getElementById("text-input");
    const memeText = document.getElementById("meme-text");

    textInput.addEventListener("keyup", function(){
        memeText.innerText = textInput.value;
    });

    let loadFile = function(event) {
    let output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
        }
    };

    let fireButton = document.getElementById("fire");
    let imgContainer = document.getElementById("meme-image-container");

    fireButton.addEventListener("click", function(){
        imgContainer.style.border = '3px dashed red';
    });

    let waterButton = document.getElementById("water");

    waterButton.addEventListener("click", function(){
        imgContainer.style.border = '5px double blue';
    });

    let earthButton = document.getElementById("earth");

    earthButton.addEventListener("click", function(){
        imgContainer.style.border = '6px groove green';
    });

    const imgMeme1 = document.querySelector('#meme-1');
    const imgMeme2 = document.querySelector('#meme-2');
    const imgMeme3 = document.querySelector('#meme-3')
    const imgMeme4 = document.querySelector('#meme-4')
  
    let memeImg = document.querySelector('#meme-image');
  
    imgMeme1.addEventListener('click', function () {
      memeImg.style.backgroundImage = "url('./imgs/meme1.png')"
    });
    
    imgMeme2.addEventListener('click', function () {
      memeImg.style.backgroundImage = "url('./imgs/meme2.png')"
    });
  
    imgMeme3.addEventListener('click', function () {
      memeImg.style.backgroundImage = "url('./imgs/meme3.png')"
    });
  
    imgMeme4.addEventListener('click', function () {
      memeImg.style.backgroundImage = "url('./imgs/meme4.png')"
    });
}
