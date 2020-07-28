window.onload = function() {
  // Meme text
  function transferText(textInput,textLocation) {
    textInput.addEventListener("keyup", function() {
      textLocation.innerText = textInput.value;
    })
  }

  const memeText = document.getElementById("meme-text");
  const memeTextInput = document.getElementById("text-input");

  const memeTextBottom = document.getElementById("meme-text-bottom");
  const memeTextInputBottom = document.getElementById("text-input-bottom");

  transferText(memeTextInput,memeText)
  transferText(memeTextInputBottom,memeTextBottom)

  // Meme image - upload
  const memeImage = document.getElementById("meme-image");
  const memeInsert = document.getElementById("meme-insert");

  memeInsert.addEventListener("input", function() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  })

  // Meme image - template
  function useTemplate(template) {
    template.addEventListener("click", function() {
      memeImage.src = template.src
    })
  }

  const template01 = document.getElementById("meme-1");
  const template02 = document.getElementById("meme-2");
  const template03 = document.getElementById("meme-3");
  const template04 = document.getElementById("meme-4");

  useTemplate(template01);
  useTemplate(template02);
  useTemplate(template03);
  useTemplate(template04);

  // Border
  function changeBorder(button,borderSize,borderType,borderColor) {
    button.addEventListener("click", function() {
      memeImageContainer.style.border = `${borderSize} ${borderType} ${borderColor}`;
    })
  }

  const memeImageContainer = document.getElementById("meme-image-container");

  const fireButton = document.getElementById("fire");
  const waterButton = document.getElementById("water");
  const earthButton = document.getElementById("earth");

  changeBorder(fireButton,"3px","dashed","red");
  changeBorder(waterButton,"5px","double","blue");
  changeBorder(earthButton,"6px","groove","green");

  // Reset
  const resetButton = document.querySelectorAll(".reset")[1];

  resetButton.addEventListener("click", function() {
    memeImageContainer.style.border = "";
    memeText.innerText = "";
    memeTextBottom.innerText = "";
    memeImage.src = "https://dummyimage.com/439x392/aaa/fff.png&text=<Select+an+image>";
  })

  const resetBorder = document.querySelectorAll(".reset")[0];

  resetBorder.onclick = function() {
    memeImageContainer.style.border = "";
  }


}