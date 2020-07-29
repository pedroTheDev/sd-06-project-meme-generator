  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text');
  
  
  textInput.addEventListener('input', function() {
    memeText.innerHTML = textInput.value
    
  });
  
  let memeIsert = document.querySelector('#meme-insert');
  let memeImg = document.querySelector('#meme-image');
  

  memeIsert.addEventListener('change', function(event){
    memeImg.src = URL.createObjectURL(event.target.files[0]);
  });

  let fireButton = document.querySelector('#fire');
  fireButton.addEventListener('click', function(){
    let container = document.querySelector('.container');
    container.style.border = "3px dashed red";
  });

  let waterButton = document.querySelector('#water');
  waterButton.addEventListener('click', function(){
    let container = document.querySelector('.container');
    container.style.border = "5px double blue";
  });

  let earthButton = document.querySelector('#earth');
  earthButton.addEventListener('click', function(){
    let container = document.querySelector('.container');
    container.style.border = "6px groove green";
  });

  let memeSelector = document.querySelector('.memes-container');
  memeSelector.addEventListener('click', function(event){
    let selectedMeme = event.target;
    memeImg.src = selectedMeme.src;
  })
