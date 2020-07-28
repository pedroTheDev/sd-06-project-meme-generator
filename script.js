const loadFile = function (event) {
    let output = document.getElementById ('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src);
    }
  };
  
  const inputTextBox = document.getElementById ('text-input');
  const paragraph = document.getElementById ("output-text");
  
  function insertText (event) {
    document.querySelector ('text-input');
    paragraph.innerHTML = inputTextBox.value;
  };
  
  inputTextBox.addEventListener ('keyup', insertText);