const textInput = document.getElementById("text-input")
const memeText = document.getElementById("meme-text")

function addText() {
    memeText.innerText = textInput.value
}

textInput.addEventListener('input', addText)