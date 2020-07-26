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