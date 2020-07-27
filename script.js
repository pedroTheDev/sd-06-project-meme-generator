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
		console.log(myImageInput.scr);
		myImageMeme.onload = function () {
			URL.revokeObjectURL(myImageMeme.src);
		}
	});

};