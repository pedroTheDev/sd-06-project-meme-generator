function textAdd() {
    let inputText = document.getElementById("text-input").value;
    if (inputText.length > 50) {
        alert("O texto deve ter menos de 50 caracteres!");
    } else {
      document.getElementById("meme-text").innerHTML = inputText;
    }
}

function imageAdd(){
    
}