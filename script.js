window.onload = function() {
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text');
  
  
  textInput.addEventListener('input', function() {
    memeText.innerHTML = textInput.value
    
  });
  
  let memeIsert = document.querySelector('#meme-insert');
  let memeImg = document.querySelector('meme-image');

  memeIsert.addEventListener('change', function(event){
    memeImg.src = URL.createObjectURL(event.target.files[0]);
  });
}