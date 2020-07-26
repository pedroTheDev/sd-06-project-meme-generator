
window.onload =function() {
  const textMeme = document.querySelector('#meme-text');
  const inputText = document.querySelector('#text-input');
  inputText.addEventListener('input', function(){
    textMeme.innerText = inputText.value;
  });
  const botaoFire = document.querySelector('#fire');
  const containerImage = document.querySelector('#meme-image-container');
  botaoFire.addEventListener('click', function(){
    containerImage.style.border = '3px dashed red';
  });
  const botaoWater = document.querySelector('#water');
  botaoWater.addEventListener('click', function(){
    containerImage.style.border = '5px double blue';
  });
  const botaoEarth = document.querySelector('#earth');
  botaoEarth.addEventListener('click', function(){
    containerImage.style.border = '6px groove green';
  });
  const catchMeme1 = document.querySelector('#meme-1');
  const catchMeme2 = document.querySelector('#meme-2');
  const catchMeme3 = document.querySelector('#meme-3');
  const catchMeme4 = document.querySelector('#meme-4');
  const catchImageMeme = document.querySelector('#meme-image');
  catchMeme1.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme1.png')";
  });
  catchMeme2.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme2.png')";
  });
  catchMeme3.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme3.png')";
  });
  catchMeme4.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme4.png')";
  });
};
