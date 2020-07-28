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
    document.getElementById('meme-image-container').style.border = "3px dashed red";
}

function changeBorderWater() {
    document.getElementById('meme-image-container').style.border = "5px double blue";
}

function changeBorderEarth() {
    document.getElementById('meme-image-container').style.border = "6px groove green";
}

function selectImg1() {
    let url = document.getElementById('meme-1').src;
    let img = document.getElementById('meme-image');
    img.src = url;
}

function selectImg2() {
    let url = document.getElementById('meme-2').src;
    let img = document.getElementById('meme-image');
    img.src = url;
}

function selectImg3() {
    let url = document.getElementById('meme-3').src;
    let img = document.getElementById('meme-image');
    img.src = url;
}

function selectImg4() {
    let url = document.getElementById('meme-4').src;
    let img = document.getElementById('meme-image');
    img.src = url;
}