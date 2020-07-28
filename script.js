function onLoadText(){
    let texto = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerHTML = texto;
}

function onLoadImg() {
    let img = document.getElementById('meme-image');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function() {
        URL.revokeObjectURL(img.src)
    }
}

function changeBorderFire() {
    document.getElementById('meme-image-container').style.border = "3px double red";
}

function changeBorderWater() {
    document.getElementById('meme-image-container').style.border = "5px double blue";
}

function changeBorderEarth() {
    document.getElementById('meme-image-container').style.border = "5px double green";
}