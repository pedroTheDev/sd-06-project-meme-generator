const loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
const text = document.getElementById('text-input');
const memeInsert = document.querySelector('#meme-insert');

text.addEventListener('keyup', function(){
  memeIsert.innerText = text.value;
})
const containder = document.getElementById('meme-image-container');

const imgMemeInsert = document.querySelector('#meme-insert');