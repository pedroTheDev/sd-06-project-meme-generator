
window.onload = function () {
    //Referencing elements
    let inputTextElement = document.querySelector('#text-input');
    let memeTextBox = document.querySelector('#meme-text');
    let inputImageElement =document.querySelector('#meme-insert');
    let memeImage = document.querySelector('#meme-image');
    let buttons = document.querySelectorAll('button');
    let container = document.querySelector('#meme-image-container');
    let preSetImages = document.querySelectorAll('#thumbnails img');

    let availableStyles = {
        fire: 'dashed rgb(255 , 0 , 0) 3px',
        water: 'double rgb(0 , 0 , 255) 5px',
        earth: 'groove rgb(0 , 128 , 0) 6px',
    }

    //Functions
    let functionalities = {
        addText: (event) => memeTextBox.innerHTML = inputTextElement.value,
        uploadImage: (event) => memeImage.src = window.URL.createObjectURL(inputImageElement.files[0]),
        changeStyle: {
            fire: (event) => container.style.border = availableStyles['fire'],
            water: (event) => container.style.border = availableStyles['water'],
            earth: (event) => container.style.border = availableStyles['earth'],
        },
        uploadPreSetImage: {
            meme1: (event) => memeImage.src = 'imgs/meme1.png',
            meme2: (event) => memeImage.src = 'imgs/meme2.png',
            meme3: (event) => memeImage.src = 'imgs/meme3.png',
            meme4: (event) => memeImage.src = 'imgs/meme4.png',
        },
    }

    //Events
    inputTextElement.addEventListener('keyup', functionalities['addText']);
    inputImageElement.addEventListener('change', functionalities['uploadImage']);
    for (let i = 0; i < buttons.length; i += 1) {
        let key = buttons[i].id;
        buttons[i].addEventListener('click', functionalities.changeStyle[key]);
    }
    for (let i=0; i < preSetImages.length; i += 1) {
        let key = 'meme' + (i+1);
        preSetImages[i].addEventListener('click', functionalities.uploadPreSetImage[key]);
    }
}
