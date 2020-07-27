window.onload = function () {


    let memeText = document.querySelector('#meme-text');
    let textInput = document.querySelector('#text-input');
        textInput.addEventListener('input', function () {
        memeText.innerText = textInput.value;
    });
    const fireButton = document.querySelector("#fire");
    const imgContainer = document.querySelector("#meme-image-container");

    fireButton.addEventListener("click", function(){
        imgContainer.style.border = "5px red"
    });


    const waterButton = document.querySelector("#water");
    const imgContainer = document.querySelector("#meme-image-container");

    waterButton.addEventListener("click", function(){
        imgContainer.style.border = "5px blue"
    });
    
    const earthButton = document.querySelector("#earth");
    const imgContainer = document.querySelector("#meme-image-container");

    earthButton.addEventListener("click", function(){
        imgContainer.style.border = "5px green"
    });
    


    const chooseMeme1 = document.querySelector('#meme-1');
    const chooseMeme2 = document.querySelector('#meme-2');
    const chooseMeme3 = document.querySelector('#meme-3');
    const chooseMeme4 = document.querySelector('#meme-4');

    let memeImage = document.querySelector('#meme-image');

    chooseMeme1.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./Pictures/mini1.png')"
    });

    chooseMeme2.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./Pictures/mini2.png')"
    });

    chooseMeme3.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./Pictures/mini3.png')"
    });

    chooseMeme4.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./Pictures/mini4.png')"
    });
  };
