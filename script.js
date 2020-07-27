// //function previewImagem() {
//     let imagem = document.querySelector('input[name=imagem]').files[0];
//     let preview = document.querySelector('img');

//     let reader = new FileReader();

//     reader.onloadend = function() {
//         preview.src = reader.result;
//     }

//     if (imagem) {
//         reader.readAsDataURL(imagem);
//     } else {
//         preview.src = "";
//     }
// }