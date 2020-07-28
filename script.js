function getInputValue() {
    let text = document.getElementById("text-input").value;
    // let texto = document.getElementById("text-meme");
    // texto.appendChild(text);
    document.getElementById('meme-text').innerText = text
}



let area =  document.getElementById("text-input");
area.addEventListener('keyup', getInputValue)