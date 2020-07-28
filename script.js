window.onload = function () {
  // constante que recebe o texto iserido no input   
  const textInput = document.getElementById("text-input");
  // constante que recebe o valor da <div> que fará o texto inserido no input aparecer em cima da imagem 
  const memeText = document.getElementById("meme-text");

  textInput.addEventListener("keyup", function(){
      memeText.innerText = textInput.value;
  });

  let fireButton = document.getElementById("fire");
  let imgContainer = document.getElementById("meme-image-container");

  fireButton.addEventListener("click", function(){
      imgContainer.style.border = '3px dashed red';
  });

  let waterButton = document.getElementById("water");

  waterButton.addEventListener("click", function(){
      imgContainer.style.border = '5px double blue';
  });

  let earthButton = document.getElementById("earth");

  earthButton.addEventListener("click", function(){
      imgContainer.style.border = '6px groove green';
  });


  // constante que recebe o valor da tag <img> onde será inserida a imagem selecionada em meu pc
  const memeImage = document.getElementById('meme-image');

  // constante que recebe o valor da imagem selecionada em meu pc (botão escolher arquivo)
  const memeInput = document.querySelector('#meme-insert');
          
  //função que seleciona o imagem no meu pc e carrega dentro do conteiner
  function selectedImage(event) {
      memeImage.src = URL.createObjectURL(event.target.files[0]);
      memeImage.onload = function () {
        URL.revokeObjectURL(memeImage.src);
      };
  }
  memeInput.addEventListener('change', selectedImage);
  
  // constantes que recebem o valor das imagens definidas na parte inferior da pagina
  const miniImgs1 = document.getElementById("meme-1");
  const miniImgs2 = document.getElementById("meme-2");
  const miniImgs3 = document.getElementById("meme-3");
  const miniImgs4 = document.getElementById("meme-4");

  //funções que ao clicar em uma das imagens ja definidas na parte inferior da pagina joga a imagem dentro do conteiner 
  function trocaMeme1() {
      memeImage.src = miniImgs1.src;
  }
  miniImgs1.addEventListener('click', trocaMeme1);
  
  function trocaMeme2() {
      memeImage.src = miniImgs2.src;
  }
  miniImgs2.addEventListener('click', trocaMeme2);
  
  function trocaMeme3() {
      memeImage.src = miniImgs3.src;
  }
  miniImgs3.addEventListener('click', trocaMeme3);
  
  function trocaMeme4() {
      memeImage.src = miniImgs4.src;
  }
  miniImgs4.addEventListener('click', trocaMeme4);

  

}