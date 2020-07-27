window.onload = function() {
  //Tomando imagen e colocando no container
  let meme_Image = document.createElement('img')
  loadFile = function(event) {
    let reader = new FileReader();
    reader.onload = function(){
      let image = document.getElementById('meme-image').appendChild(meme_Image);
      image.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };


  //imagem.addEventListener('input', function() {
  //  imagemInserida.src = "./img/" + imagem.files[0].name;
  //  document.querySelector('#meme-image-container').//appendChild(imagemInserida)
  //})
 //
  //Colocando o texto inserido em no container
  
  
  let textoInput = document.querySelector('#text-input');
  textoInput.addEventListener('keyup', function() {
    let texto = document.querySelector('#meme-text');
    texto.innerHTML = textoInput.value; 
  })
}