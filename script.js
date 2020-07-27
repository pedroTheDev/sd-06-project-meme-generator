window.onload = () => {
    console.log('carregou')
    insertMemeText();
}


function insertMemeText() {
    const insertTextField = document.getElementById('text-input');
    const memeText = document.getElementById('meme-text');
    console.log(insertTextField.innerText)
    insertTextField.addEventListener('keypress', (key) => {
        if (key.key === 'Enter') {
            memeText.innerText = insertTextField.value;
            insertTextField.value = '';
        }
    })
}