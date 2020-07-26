window.onload = function () {
    let memeText = document.getElementById('meme-text');
    let textInput = document.getElementById('text-input');

    textInput.addEventListener('keyup', function () {
        memeText.innerText = textInput.value;
      });
}

document.getElementById('meme-insert').addEventListener('change', readURL, true);

function readURL(){
   var file = document.getElementById("meme-insert").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('meme-image').style.backgroundImage = "url(" + reader.result + ")";        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}

let memeImage = document.getElementById('meme-image');

document.getElementById('meme1').addEventListener('click', function() {
    memeImage.src = 'images/meme1.jpg';
});

document.getElementById('meme2').addEventListener('click', function() {
    memeImage.src = 'images/meme2.jpg';
});

document.getElementById('meme3').addEventListener('click', function() {
    memeImage.src = 'images/meme3.jpg';
});

document.getElementById('meme4').addEventListener('click', function() {
    memeImage.src = 'images/meme4.jpg';
});

document.getElementById('fire').addEventListener('click', function () {
    memeImage.className = "fireBorder";
});

document.getElementById('water').addEventListener('click', function () {
    memeImage.className = "waterBorder";
});

document.getElementById('earth').addEventListener('click', function () {
    memeImage.className = "earthBorder";
});