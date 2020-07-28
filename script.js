 function addText(event) {
     var conteudo = event.target.value;
     var getDiv = document.getElementById("meme-text");
     getDiv.innerHTML = conteudo;


 }










 var loadFile = function(event) {
     var output = document.getElementById('meme-image');
     output.src = URL.createObjectURL(event.target.files[0]);
     output.onload = function() {
         URL.revokeObjectURL(output.src)
     }
 };