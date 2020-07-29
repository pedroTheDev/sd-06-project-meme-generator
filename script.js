function carregar(){
  var textInput = document.querySelector("#text-input");
  var textInside = document.querySelector("#meme-text");

  textInput.addEventListener("keyup", function(){
      textInside.innerText = textInput.value;
      textInside.className = "meme-text";
  })

  // var imageInput = document.querySelector("#meme-insert");
  // var imageInside = document.querySelector("#meme-image");
  //   var loadFile = function(event) {
  //   var output = document.getElementById('output');
  //   output.src = URL.createObjectURL(event.target.files[0]);
  //   output.onload = function() {
  //     URL.revokeObjectURL(output.src)
  //   }
  // };


  imageInput.addEventListener("input", function(event){
  imageInside.src = URL.createObjectURL(event.target.files[0])
  })
}