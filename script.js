//Showing meme text
let memeTextInput = document.querySelector('#text-input');
let memeTextBox = document.querySelector('#meme-text');
let realImageUploadButton = document.querySelector('#meme-insert');
let imagegUplodButton =document.querySelector('#fake-upload-button');
let memeImage = document.querySelector('#meme-image');

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
}

//Commands
imagegUplodButton.addEventListener('click', functionalities['selectImageFile']);
memeTextInput.addEventListener('change', functionalities['addMemeText']);
realImageUploadButton.addEventListener('change',functionalities['uploadImage']);