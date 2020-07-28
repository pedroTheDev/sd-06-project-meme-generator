window.onload = function() {
  // Meme text
  const memeText = document.getElementById("meme-text");
  const memeTextInput = document.getElementById("text-input");

  memeTextInput.addEventListener("keyup", function() {
    memeText.innerText = memeTextInput.value;
  })

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
  const resetButton = document.querySelector(".reset");

  resetButton.addEventListener("click", function() {
    memeImageContainer.style.border = "";
    memeText.innerText = "";
    memeImage.src = "https://dummyimage.com/439x392/aaa/fff.png&text=<Select+an+image>";

  })
}