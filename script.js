window.onload = function () {
	// Altera o texto do Meme
	let myTextImput = document.getElementById("text-input");
	myTextImput.addEventListener("keyup", function () {
		let myTextMeme = document.getElementById("meme-text");
		if (myTextImput.value == "") {
			myTextMeme.innerText = "Texto do Meme"
		} else {
			myTextMeme.innerText = myTextImput.value;
		}
	});

	// Altera a imagem do Meme	
	let myImageInput = document.getElementById("meme-insert");
	myImageInput.addEventListener("change", function (event) {
		let myImageMeme = document.getElementById("meme-image");
		myImageMeme.src = URL.createObjectURL(event.target.files[0]);
		myImageMeme.onload = function () {
			URL.revokeObjectURL(myImageMeme.src);
		}
	});

	// Altera bordas da imagem usando botões
	let btnFire = document.getElementById("fire");
	btnFire.addEventListener("click", function () {
		let myImageContainer = document.getElementById("meme-image-container");
		myImageContainer.style.border = "3px dashed red";
	});	
	let btnWater = document.getElementById("water");
	btnWater.addEventListener("click", function () {
		let myImageContainer = document.getElementById("meme-image-container");
		myImageContainer.style.border = "5px double blue";
	});	
	let btnEarth = document.getElementById("earth");
	btnEarth.addEventListener("click", function () {
		let myImageContainer = document.getElementById("meme-image-container");
		myImageContainer.style.border = "6px groove green";
	});	

	// Altera Imagem usando as imagens de exemplo
	let meme1 = document.getElementById("meme-1");
	meme1.addEventListener("click", function () {
		changeImage(meme1);
	});
	let meme2 = document.getElementById("meme-2");
	meme2.addEventListener("click", function () {
		changeImage(meme2);
	});	
	let meme3 = document.getElementById("meme-3");
	meme3.addEventListener("click", function () {
		changeImage(meme3);
	});	
	let meme4 = document.getElementById("meme-4");
	meme4.addEventListener("click", function () {
		changeImage(meme4);
	});	

	function changeImage(memeImage) {
		let myImageMeme = document.getElementById("meme-image");
		myImageMeme.src = memeImage.getAttribute('src'); // URL.createObjectURL(event.target.value);
		myImageMeme.onload = function () {
			URL.revokeObjectURL(myImageMeme.src);
		}
	}

}