const textInput = document.getElementById('text-input')
const memeText = document.getElementById('meme-text')
const fire = document.getElementById('fire')
const water = document.getElementById('water')
const earth = document.getElementById('earth')
const imgContainer = document.getElementById('meme-image-container')

textInput.addEventListener('input', function(){
  memeText.innerText = textInput.value
  memeText.style.width = '20px'
})

const photoInsert = document.getElementById('meme-insert');
const memeImage =  document.getElementById('meme-image');
photoInsert.addEventListener('change', function() {
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
