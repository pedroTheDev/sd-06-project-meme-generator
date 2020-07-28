function textAdd() {
  let inputText = document.getElementById("text-input").value;
  let textContainer = document.createElement("p");
  textContainer.id = ("text-container");
  let parentText = document.getElementById("meme-text");
  parentText.appendChild(textContainer);

  document.getElementById("text-container").innerHTML = inputText;
}

function imageAdd() {
  const imageInput = document.getElementById("image-input").files;
  const reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("meme-image-container").style.backgroundImage = "url(" + e.target.result + ")";
  }
  reader.readAsDataURL(imageInput[0]);
}

