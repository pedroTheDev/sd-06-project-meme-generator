let imgInput = document.getElementById('meme-insert');
imgInput.addEventListener('change' , function(){
    let imgLocal = document.getElementById('meme-image');
    imgLocal.src = window.URL.createObjectURL(imgInput.files[0]);
});


let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup' , function(){
    document.getElementById('meme-text').innerHTML = textInput.value;
});

