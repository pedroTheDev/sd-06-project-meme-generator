window.onload = function(){
 //TEXTO
let text = document.getElementById('text-input');
text.addEventListener('input',function(){
   let impress = document.getElementById('meme-text');
   impress.innerHTML = text.value;
 })
//IMAGEM
let img = document.getElementById('meme-insert')
img.addEventListener('change', function(event){
  let impressImg = document.getElementById('meme-imagem');
  impressImg.src = URL.createObjectURL(event.target.files[0]);
})


}
