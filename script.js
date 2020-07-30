 function addText(event) {
     var conteudo = event.target.value;
     var getDiv = document.getElementByClass("meme-text");
     getDiv.innerHTML = conteudo;


 }


 const textInput = document.querySelector('#text-input');
 textInput.addEventListener('keyup', function() {
     const showText = document.querySelector('#meme-text');
     showText.innerHTML = textInput.value;
 });










 var loadFile = function(event) {
     var output = document.getElementById('meme-image');
     output.src = URL.createObjectURL(event.target.files[0]);
     output.onload = function() {
         URL.revokeObjectURL(output.src)
     }
 };