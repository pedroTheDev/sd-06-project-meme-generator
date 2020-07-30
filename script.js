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




  let buttonRed = document.querySelector("#fire");
  buttonRed.addEventListener("click", function() {

      let memeFire = document.querySelector('#meme-image-container');
      memeFire.style.border = '3px dashed red';
  });

  let buttonBlue = document.querySelector("#water");
  buttonBlue.addEventListener("click", function() {

      let memeWater = document.querySelector('#meme-image-container');
      memeWater.style.border = '5px doble blue';
  });

  let buttonGreen = document.querySelector("#earth");
  buttonRed.addEventListener("click", function() {

      let memeEarth = document.querySelector('#meme-image-container');
      memeEarth.style.border = '6px groove green';
  });