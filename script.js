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
  memeInsert.innerText = textInput.value;
})

const memeIpt =  document.querySelector('#meme-insert');
function text() {
  let auxText = document.querySelector('#Text-input').value;
  document.querySelector('#meme-text').textContent = auxText;
}