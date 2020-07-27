//iniciando projeto

window.onload = function () {
<<<<<<< HEAD
    let memeText = document.querySelector('#meme-text');
    let textInput = document.querySelector('#text-input');
  
    textInput.addEventListener('input', function () {
      memeText.innerText = textInput.value;
    });
    
    const fireButton = document.querySelector('#fire');
    const imgContainer = document.querySelector('#meme-image-container');
  
    fireButton.addEventListener('click', function () {
      imgContainer.style.border = '3px red';
    });
  
    const waterButton = document.querySelector('#water');
  
    waterButton.addEventListener('click', function () {
      imgContainer.style.border = '5px blue';
    });
  
    const earthButton = document.querySelector('#earth');
  
    earthButton.addEventListener('click', function () {
      imgContainer.style.border = '6px green';
    });
   
    const picMeme1 = document.querySelector('#meme-1');
    const picMeme2 = document.querySelector('#meme-2');
    const picMeme3 = document.querySelector('#meme-3')
    const picMeme4 = document.querySelector('#meme-4')
  
    let memeImage = document.querySelector('#meme-image');
  
    picMeme1.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./imgs/meme1.png')"
    });
    
    picMeme2.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./imgs/meme2.png')"
    });
  
    picMeme3.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./imgs/meme3.png')"
    });
  
    picMeme4.addEventListener('click', function () {
      memeImage.style.backgroundImage = "url('./imgs/meme4.png')"
    });
  };
=======
  let memeText = document.querySelector('#meme-text');
  let textInput = document.querySelector('#text-input');

  textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
  });
  
}
>>>>>>> 8df3daeeed2de0ba339703bd92477396f3a8baaa
