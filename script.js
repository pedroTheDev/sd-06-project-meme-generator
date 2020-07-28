//Adicionando texto.
let text = document.getElementById('text-input');
text.addEventListener('input',function(){
    let note = document.getElementById('meme-text');
    note.innerHTML = text.value;
});
//Adicionando imagem.
let btnImg = document.getElementById('meme-insert');
btnImg.addEventListener('input', function(event) {
let photo = document.getElementById('meme-image');
photo.src = URL.createObjectURL(event.target.files[0]);
photo.onload = function() {
    URL.revokeObjectURL(photo.src)
    }
    
});
//btn de estilização customizada.
let btnFire = document.getElementById('fire');
btnFire.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '3px dashed red';
});
let btnWater = document.getElementById('water');
btnWater.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '5px double blue';
});
let btnEarth = document.getElementById('earth');
btnEarth.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '6px groove green';
});
// memes pŕe prontos.
let pic1 = document.getElementById('meme-1');
pic1.addEventListener('click',function() {
   document.getElementById('meme-image').src = pic1.src;
});
let pic2 = document.getElementById('meme-2');
pic2.addEventListener('click',function() {
   document.getElementById('meme-image').src = pic2.src;
});
let pic3 = document.getElementById('meme-3');
pic3.addEventListener('click',function() {
   document.getElementById('meme-image').src = pic3.src;
});
let pic4 = document.getElementById('meme-4');
pic4.addEventListener('click',function() {
   document.getElementById('meme-image').src = pic4.src;
});
