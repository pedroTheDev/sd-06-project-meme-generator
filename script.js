// Funcções dos botões para alterar borda
let btnWater = document.getElementById('btnWater');
    btnWater.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '5px double blue';
});
let btnFire = document.getElementById('btnFire');
    btnFire.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '3px dashed red';
});
let btnEarth = document.getElementById('btnEarth');
    btnEarth.addEventListener('click',function() {
    let estilo = document.getElementById('meme-image-container');
    estilo.style.border = '6px groove green';
});
// funções para clicar na imagem sugerida
let cachorroPreguica = document.getElementById('cachorroPreguica');
    cachorroPreguica.addEventListener('click',function() {
    document.getElementById('meme-image').src = cachorroPreguica.src;
});
let gatoSelfie = document.getElementById('gatoSelfie');
    gatoSelfie.addEventListener('click',function() {
    document.getElementById('meme-image').src = gatoSelfie.src;
});
let esquilo = document.getElementById('esquilo');
    esquilo.addEventListener('click',function() {
    document.getElementById('meme-image').src = esquilo.src;
});
let gatoBravo = document.getElementById('gatoBravo');
    gatoBravo.addEventListener('click',function() {
    document.getElementById('meme-image').src = gatoBravo.src;
});
// função para inserir texto na imagem
let texto = document.getElementById('text-input');
    texto.addEventListener('input',function(){
    let frase = document.getElementById('meme-text');
    frase.innerHTML = texto.value;
});
//funcao para fazer o upload da foto
let btnUpload = document.getElementById('meme-insert');
    btnUpload.addEventListener('input', function(event) {
    let foto = document.getElementById('meme-image');
    foto.src = URL.createObjectURL(event.target.files[0]);
    foto.onload = function() {
    URL.revokeObjectURL(foto.src)
    }
});
