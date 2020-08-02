  function addText(event) {
      var conteudo = event.target.value;
      var getDiv = document.getElementByClass("meme-text");
      getDiv.innerHTML = conteudo;


  }

  let textInput = document.querySelector("#text-input");
  textInput.addEventListener("input", () => {

      let showText = document.querySelector("#meme-text");
      showText.innerHTML = textInput.value;
  })


  //   const textInput = document.querySelector('#text-input');
  //   textInput.addEventListener('keyup', function() {
  //       const showText = document.querySelector('#meme-text');
  //       showText.innerHTML = textInput.value;
  //   });


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

  let blueButton = document.querySelector("#water");
  blueButton.addEventListener("click", function() {

      let memeWater = document.querySelector('#meme-image-container');
      memeWater.style.border = '5px doble blue';
  });

  let buttonGreen = document.querySelector("#earth");
  buttonGreen.addEventListener("click", function() {

      let memeEarth = document.querySelector('#meme-image-container');
      memeEarth.style.border = '6px groove green';
  });

  let memeProntoClick = document.querySelector("#meme1")
  memeProntoClick.addEventListener("click", () => {


      let memeImage = document.querySelector("#meme-image")

      memeImage.src = event.target.src;
  })

  let memeProntoClick2 = document.querySelector("#meme2")
  memeProntoClick2.addEventListener("click", () => {


      let memeImage = document.querySelector("#meme-image")

      memeImage.src = event.target.src;
  })

  let memeProntoClick3 = document.querySelector("#meme3")
  memeProntoClick3.addEventListener("click", () => {


      let memeImage = document.querySelector("#meme-image")

      memeImage.src = event.target.src;
  })

  let memeProntoClick4 = document.querySelector("#meme4")
  memeProntoClick4.addEventListener("click", () => {


      let memeImage = document.querySelector("#meme-image")

      memeImage.src = event.target.src;
  })