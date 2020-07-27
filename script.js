window.onload = function () {
	let myTextImput = document.getElementById("text-input");
	myTextImput.addEventListener("keyup", function(){
		console.log(myTextImput.value);
		let myTextMeme = document.getElementById("meme-text");
		if (myTextImput.value == "") {
			myTextMeme.innerText = "Texto do Meme"	
		} else {
			myTextMeme.innerText = myTextImput.value;
		}
	});
};