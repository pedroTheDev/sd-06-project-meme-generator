const textInput = document.getElementById('text-input')
const memeText = document.getElementById('meme-text')
const fire = document.getElementById('fire')
const water = document.getElementById('water')
const earth = document.getElementById('earth')
const imgContainer = document.getElementById('meme-image-container')
const meme1 = document.getElementById('meme-1')
const meme2 = document.getElementById('meme-2')
const meme3 = document.getElementById('meme-3')
const meme4 = document.getElementById('meme-4')
const memeInsert = document.getElementById('meme-insert');
const memeImage =  document.getElementById('meme-image');

textInput.addEventListener('input', function(){
  memeText.innerText = textInput.value
  memeText.style.width = '20px'
})

memeInsert.addEventListener('change', function() {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
})

fire.addEventListener('click', function () {
  imgContainer.style.border = '3px dashed red'
})

water.addEventListener('click', function () {
  imgContainer.style.border = '5px double blue'
})

earth.addEventListener('click', function () {
  imgContainer.style.border = '6px groove green'
})

meme1.addEventListener('click', function () {
  memeImage.src = meme1.src
})

meme2.addEventListener('click', function () {
  memeImage.src = meme2.src
})

meme3.addEventListener('click', function () {
  memeImage.src = meme3.src
})

meme4.addEventListener('click', function () {
  memeImage.src = meme4.src
})