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