window.onload = function () {
    const textInput = document.getElementById("text-input");
    const memeText = document.getElementById("meme-text");

    textInput.addEventListener("keyup", function(){
        memeText.innerText = textInput.value;
    });

    let fireButton = document.getElementById("fire");
    let imgContainer = document.getElementById("meme-image-container");

    fireButton.addEventListener("click", function(){
        imgContainer.style.border = '3px dashed red';
    });

    let waterButton = document.getElementById("water");

    waterButton.addEventListener("click", function(){
        imgContainer.style.border = '5px double blue';
    });

    let earthButton = document.getElementById("earth");

    earthButton.addEventListener("click", function(){
        imgContainer.style.border = '6px groove green';
    });



    const memeImage = document.getElementById('meme-image');
    const memeInput = document.querySelector('#meme-insert');
            

    function selectedImage(event) {
        memeImage.src = URL.createObjectURL(event.target.files[0]);
        memeImage.onload = function () {
          URL.revokeObjectURL(memeImage.src);
        };
    }
    memeInput.addEventListener('change', selectedImage);


    const miniImgs1 = document.getElementById("meme-1");
    const miniImgs2 = document.getElementById("meme-2");
    const miniImgs3 = document.getElementById("meme-3");
    const miniImgs4 = document.getElementById("meme-4");

    
    function trocaMeme1() {
        memeImage.src = miniImgs1.src;
    }
    
    function trocaMeme2() {
        memeImage.src = miniImgs2.src;
    }
    
    function trocaMeme3() {
        memeImage.src = miniImgs3.src;
    }
    
    function trocaMeme4() {
        memeImage.src = miniImgs4.src;
    }

    miniImgs1.addEventListener('click', trocaMeme1);
    miniImgs2.addEventListener('click', trocaMeme2);
    miniImgs3.addEventListener('click', trocaMeme3);
    miniImgs4.addEventListener('click', trocaMeme4);






}
