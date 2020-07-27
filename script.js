window.onload = function(){
 //TEXTO
let text = document.getElementById('text-input');
text.addEventListener('input',function(){
   let impress = document.getElementById('meme-text');
   impress.innerHTML = text.value;
 })
//IMAGEM
let setImgInput = document.querySelector('#meme-insert');
  setImgInput.addEventListener('change', function(event) {
    document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
  })


}
