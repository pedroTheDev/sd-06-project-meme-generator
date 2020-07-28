function textAdd() {
    let inputText = document.getElementById("text-input").value;
    let textContainer = document.createElement("p");
    textContainer.id = ("text-container");
    let parentText  = document.getElementById("meme-text");
    parentText.appendChild(textContainer);

      document.getElementById("text-container").innerHTML = inputText;
    }

function imageAdd(){
    
}