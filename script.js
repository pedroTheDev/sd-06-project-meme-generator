
function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
    
    if (file) {
        console.log(reader.readAsDataURL(file));
    } else {
      preview.src = "";
    }
  }