function textWrite () {
    let texto = document.querySelector("#text-input").value;
    let memeText = document.querySelector("#meme-text");
    memeText.innerHTML = texto;
}