//Referencing elements
let memeTextInput = document.querySelector('#text-input');
let memeTextBox = document.querySelector('#meme-text');
let realImageUploadButton = document.querySelector('#meme-insert');
let imagegUplodButton =document.querySelector('#fake-upload-button');
let memeImage = document.querySelector('#meme-image');
let fireStyleButton = document.querySelector('#fire');
let waterStyleButton = document.querySelector('#water');
let earthStyleButton = document.querySelector('#earth');
let imageContainer = document.querySelector('#meme-image-container');

let availableStyles = {
    fire: 'dashed red 3px',
    water: 'double blue 5px',
    earth: 'groove green 6px',
    }

//All functionalities used
let functionalities = {
    selectImageFile: (event) => realImageUploadButton.click(),
    uploadImage: function uploadImage() {
        if (realImageUploadButton.value) {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(realImageUploadButton.files[0]);
            fileReader.onloadend = function(event){
                memeImage.src = event.target.result;
                alert('Meme image uploaded with success :)');
            }
        } else {
            alert('No meme image chosen, yet :(');
        }
    },
    addMemeText: function addMemeText() {
        memeTextBox.innerHTML = memeTextInput.value;
    },
    changeStyle: {
        fire: (event) => imageContainer.style.border = availableStyles['fire'],
        water: (event) => imageContainer.style.border = availableStyles['water'],
        earth: (event) => imageContainer.style.border = availableStyles['earth'],
    },
}

//Commands
imagegUplodButton.addEventListener('click', functionalities['selectImageFile']);
memeTextInput.addEventListener('change', functionalities['addMemeText']);
realImageUploadButton.addEventListener('change',(event) => functionalities['uploadImage']);
fireStyleButton.addEventListener('click', functionalities.changeStyle['fire']);
waterStyleButton.addEventListener('click', functionalities.changeStyle['water']);
earthStyleButton.addEventListener('click', functionalities.changeStyle['earth']);
    