function textAdd() {
  let inputText = document.getElementById("text-input").value;
  let textContainer = document.createElement("p");
  textContainer.id = ("text-container");
  let parentText = document.getElementById("meme-text");
  parentText.appendChild(textContainer);

  document.getElementById("text-container").innerHTML = inputText;
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

