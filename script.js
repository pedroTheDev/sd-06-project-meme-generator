// Texto
const textInput = document.getElementById("text-input");
const memeText = document.getElementById('meme-text');
textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
});

// Imagem
let memeInsert = document.getElementById("meme-insert");
let memeContainer = document.getElementById("meme-image-container");

let bgImage = document.getElementById("meme-image");

memeInsert.addEventListener("change", function () {
    bgImage.src = URL.createObjectURL(event.target.files[0]);
});

// Customização - bordas
let buttons = document.querySelectorAll(".edit button")
let bt1 = buttons[0];
let bt2 = buttons[1];
let bt3 = buttons[2];

bt1.addEventListener("click", function () {
    memeContainer.style.border = "3px dashed red";
});
bt2.addEventListener("click", function () {
    memeContainer.style.border = "5px double blue";
});
bt3.addEventListener("click", function () {
    memeContainer.style.border = "6px groove green";
});

//Customização - imagens pré-prontas
let images = document.querySelectorAll("#edit2 img");
let img1 = images[0];
let img2 = images[1];
let img3 = images[2];
let img4 = images[3];

img1.addEventListener("click", function () {
    bgImage.src = "imgs/meme1.png";
});
img2.addEventListener("click", function () {
    bgImage.src = "imgs/meme2.png";
});
img3.addEventListener("click", function () {
    bgImage.src = "imgs/meme3.png";
});
img4.addEventListener("click", function () {
    bgImage.src = "imgs/meme4.png";
});
