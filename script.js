var bancodedados = [];
var salvar = window.prompt();

var registro = {
    salvar : salvar
}

bancodedados.push(registro);



function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(salvar == senha){
        alert('ok');
    } else {
         alert('Algo esta errado!');
    }

     
     
     
}

     