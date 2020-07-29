window.onload = function () {
    const textInput = document.getElementById('text-input');
    const memeInsert = document.getElementById('meme-insert');
    const memeText = document.getElementById('meme-text');
    const memeImg = document.getElementById('meme-image');
    const fireButton = document.getElementById('fire');
    const waterButton = document.getElementById('water');
    const earthButton = document.getElementById('earth');
    const imgContainer = document.getElementById('meme-image-container');

    textInput.addEventListener('input', function () {
        memeText.innerHTML = textInput.value;
    })

    memeInsert.addEventListener('change', function (event) {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
    memeImg.onload = function () {
        URL.revokeObjectURL(memeImg.src);
    };
    });

    fireButton.addEventListener('click', function () {
        imgContainer.style.border = '3px dashed red';
    });

    waterButton.addEventListener('click', function () {
        imgContainer.style.border = '5px double blue';
    });

    earthButton.addEventListener('click', function () {
        imgContainer.style.border = '6px groove green';
    });

}