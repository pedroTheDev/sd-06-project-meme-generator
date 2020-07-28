 var inputText = document.querySelector("text-input")

 inputText.addEventListener("onchange", (event) => {
     var conteudo = event.target.value;
     var getP = document.querySelector("meme-text");
     getP.innerHTML = conteudo;

     console.log(getP);
 });





 var loadFile = function(event) {
     var output = document.getElementById('meme-image');
     output.src = URL.createObjectURL(event.target.files[0]);
     output.onload = function() {
         URL.revokeObjectURL(output.src)
     }
 };