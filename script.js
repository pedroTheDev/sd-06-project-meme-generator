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