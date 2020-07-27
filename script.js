function onLoadImg() {
    let img = document.getElementById('meme-image');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function() {
        URL.revokeObjectURL(img.src)
    }
}