const insertMeme = document.querySelector('#meme-insert');
const buttonText = document.querySelector('#inserir-texto');

insertMeme.addEventListener('change', function (e) {
  addImg(e,insertMeme);
});

buttonText.addEventListener('click', function (e) {
  addTxt(e);
});

function addTxt (e) {
  textInput = document.querySelector('#text-input').value;
  textMeme = document.querySelector('#meme-text');
  console.log(textInput);
  textMeme.innerText = textInput;


}

function addImg (e) {
   document.querySelector('#meme-img').src = URL.createObjectURL(e.target.files[0]);
}
