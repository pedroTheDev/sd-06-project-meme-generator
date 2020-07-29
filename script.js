
let insiraSeuTexto = document.getElementById("text-imput");
let insiraSuaimagem = document.getElementById("meme-insert");   
let apareceTextonaImagem = document.getElementById("meme-text");
let carregaMeMeimagem = document.getElementById("meme-image");
let imagemNaCaixa = document.getElementById("meme-image-container");

//insiraSeuTexto.addEventListener("evento",function() {} ) // imput/change

insiraSeuTexto.addEventListener("input",function(){
apareceTextonaImagem.innerText = insiraSeuTexto.value;
}); 


insiraSuaimagem.addEventListener("change",function(){
carregaMeMeimagem.src = URL.createObjectURL(event.target.files[0]);
carregaMeMeimagem.style.maxWidth = "100%";
carregaMeMeimagem.onload = function(){
  URL.revokeObjectURL(carregaMeMeimagem.src)
}
});

//carregaMeMeimagem.addEventListener("evento",function(){})

//imagemNaCaixa.addEventListener("evento",function(){})      