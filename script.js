const inputFile = document.getElementById("meme-insert");

//Aqui eu leio a img e renderizo na div #meme-image
inputFile.addEventListener("change", function(){

  
  let file = inputFile.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const getDivElement = document.getElementById("meme-image");
    const img = new Image();
    //Aqui eu limpo a div toda vez que uma imagem é carregada
    getDivElement.innerHTML = "";

    img.src = reader.result;
    
    getDivElement.appendChild(img);
  }

  reader.readAsDataURL(file);

},false);


const inputText = document.getElementById("text-input");

//Aqui estou lendo o que é digitado pelo usuário e exibindo em cima da imagem selecionada
inputText.addEventListener("keyup", function(){
  let getMemeTxt = document.getElementById("meme-text");
  getMemeTxt.style.display = "block";
  getMemeTxt.innerHTML = inputText.value;
});
