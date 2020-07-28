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

  memeInsert.oninput = function() {
    console.log(memeInsert.files)
  }

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


}