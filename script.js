window.onload = function() {

     let campotexto = document.querySelector('#text-input');
     console.log(campotexto);
   
    campotexto.addEventListener('change', function () {
        let conteudotexto = document.querySelector('#text-input').value;
        let tagP = document.createElement('p');
        tagP.innerHTML = conteudotexto
        document.querySelector('#meme-text').appendChild(tagP);
    });


     // let tagP = document.createElement('p');
    // tagP.innerHTML = conteudotexto
}