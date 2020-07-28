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
