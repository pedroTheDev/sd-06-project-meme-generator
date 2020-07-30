document.addEventListener("keyup", function(){
  let textImputed = document.getElementById("text-input").value;
  let memeText = document.getElementById("meme-text");
  memeText.innerHTML = textImputed;
})

function onFileSelected(event) {
  let selectedFile = event.target.files[0];
  let reader = new FileReader();

  let imgtag = document.getElementById("meme-image");
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

document.querySelectorAll('.memeClass').forEach(item => {
  item.addEventListener('click', event => {
    let imgtag2 = document.getElementById("meme-image");
    let imgSrc = item.src;
    imgtag2.src = imgSrc;
  })
})