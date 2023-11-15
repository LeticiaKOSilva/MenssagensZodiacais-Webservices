
//Recupera o botão com a div = "return" e a div com id = "resp" para serem utilizados
var returnP = document.querySelector("#return");
var response = document.querySelector("#resp"); 

//Torna a div com id = "resp" oculta e retorna para a página index.html assim que o botão é precionado pelo usuário
returnP.onclick = function(){
    response.style.display = 'none'
    window.location.href = 'index.html';
}

//Recupera os dados passados do arquivo initial.js
var nameUser = localStorage.getItem('nameUser');
var sign = localStorage.getItem('sign');
var result = localStorage.getItem('result');
var image = localStorage.getItem('image');

//Faz com que a div com id  = "resp" se torne visível
response.style.display='block';

//Seleciona as tags localizadas na div de id = "resp"
var nameImage = document.querySelector("#avatar");
var nameElement = document.querySelector("#nameUser");
var signElement = document.querySelector("#signn");
var textElement = document.querySelector("#text");

//Preenche as tags localizadas na div de id = "resp" com os dados recuperados
nameImage.src = image;
nameElement.textContent = "Olá " + nameUser;
signElement.textContent = sign.toUpperCase();
textElement.textContent = result.slice(0, 0) + result.slice(0 + 1);






