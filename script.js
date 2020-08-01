window.onload = function() {
  // Variables to interact with inputed text and image
  let userTextInput = document.getElementById("text-input");
  let memeTextInputed = document.getElementById("meme-text");

  // Variables to interact with inputed upload image
  let imageUploader = document.getElementById('meme-insert');
  let inputedImage = document.getElementById('meme-image');

  // Function to interact with inputed text and image
  userTextInput.addEventListener("keyup", function() {
    memeTextInputed.innerText = userTextInput.value;
  });

  // Function to change current image to uploaded image
  imageUploader.addEventListener("change", function(event) {
    inputedImage.src = URL.createObjectURL(event.target.files[0]);
  });

  
}
// function for border buttons fire, water and earth
window.onclick = function() {
  let memeImageContainer = document.querySelector('#meme-image-container');
  if (event.target.id === 'fire') {
    memeImageContainer.style.border = '3px dashed red';
  }
  if (event.target.id === 'water') {
    memeImageContainer.style.border = '5px double blue';
  }
  if (event.target.id === 'earth') {
    memeImageContainer.style.border = ' 6px groove green';
  }
}
// function to change meme image by miniature image on click
let memeImage = document.getElementById('meme-image');
let miniatureImages = document.getElementsByClassName('miniature-images');
for (let index = 0; index < miniatureImages.length; index += 1){
  miniatureImages[index].addEventListener('click', function(){
    memeImage.src = miniatureImages[index].src;
  });
}