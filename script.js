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

//Botões FIRE, GRASS e WATER
const fire = document.getElementById("fire");
const grass = document.getElementById("grass");
const water = document.getElementById("water");

fire.addEventListener("click", function(){
  let getMemeImgContainer = document.getElementById("meme-image-container");
  getMemeImgContainer.style.borderColor = "red";
});

grass.addEventListener("click", function(){
  let getMemeImgContainer = document.getElementById("meme-image-container");
  getMemeImgContainer.style.borderColor = "green";
});

water.addEventListener("click", function(){
  let getMemeImgContainer = document.getElementById("meme-image-container");
  getMemeImgContainer.style.borderColor = "blue";
});


//Memes prontos 
const getSavedMemeDisplay = document.getElementById("saved-meme-display");
const getSavedMeme1 = document.getElementById("saved-meme1");
const getSavedMeme2 = document.getElementById("saved-meme2");
const getSavedMeme3 = document.getElementById("saved-meme3");
const getSavedMeme4 = document.getElementById("saved-meme4");


getSavedMeme1.addEventListener("click", function(){
  getSavedMemeDisplay.src = "./1.jpg";
})

getSavedMeme2.addEventListener("click", function(){
  getSavedMemeDisplay.src = "./2.jpg";
})

getSavedMeme3.addEventListener("click", function(){
  getSavedMemeDisplay.src = "./3.jpg";
})

getSavedMeme4.addEventListener("click", function(){
  getSavedMemeDisplay.src = "./4.jpg";
})