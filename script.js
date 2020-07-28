const inputText = document.querySelector('#text-input');
const saida = document.getElementById('meme-image');
const pText = document.querySelector('#meme-text');
const inputImage = document.querySelector('#meme-insert');

inputImage.addEventListener('change',function (event) {    
  const reader = new FileReader();
  reader.onload = function () {    
    saida.src = reader.result;
  }
  if (reader) {
    reader.readAsDataURL(event.target.files[0]);
  }
});

inputText.addEventListener('keyup', function(){
  pText.innerHTML = inputText.value;
});


