document.addEventListener("keyup", function(){
  let textImputed = document.getElementById("text-input").value;
  let memeText = document.getElementById("meme-text");
  memeText.innerHTML = textImputed;
})

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("meme-image");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

document.getElementById('fire').addEventListener('click', function(){
  document.getElementById('meme-image-container').style.border = "3px dashed red";
})

document.getElementById('water').addEventListener('click', function(){
  document.getElementById('meme-image-container').style.border = "5px double blue";
})

document.getElementById('earth').addEventListener('click', function(){
  document.getElementById('meme-image-container').style.border = "6px groove green";
})