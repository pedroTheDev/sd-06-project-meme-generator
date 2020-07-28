function textAdd() {
  let inputText = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = inputText;
}

const imageInput = document.getElementById("image-input")

imageInput.addEventListener('change', imageAdd);

function imageAdd(e) {
  const reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("meme-image").src = e.target.result;
  }

  reader.readAsDataURL(imageInput.files[0]);
}

