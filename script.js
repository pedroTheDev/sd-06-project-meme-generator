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