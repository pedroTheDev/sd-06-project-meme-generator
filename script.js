window.onload = function() {
  //Tomando imagen e colocando no container
  let output = document.getElementById('output');
  loadFile = function(event) {
    let reader = new FileReader();
    reader.onload = function(){
      let output = document.getElementById('output');
      output.src = reader.result;
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

}