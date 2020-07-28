function textAdd() {
  let inputText = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = inputText;
}

const imageInput = document.getElementById("image-input")

imageInput.addEventListener('change', imageAdd);

function imageAdd() {
  const imageFile = imageInput.files[0];
document.getElementById("meme-image").src = URL.createObjectURL(imageFile);
}

