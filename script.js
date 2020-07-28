const loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
const textInput = document.querySelector('#text-input');
const memeInsert = document.querySelector('#meme-text');

textInput.addEventListener('keyup', function(){
  memeIsert.innerText = textInput.value;
})

