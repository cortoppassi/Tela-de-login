var bancodedados = [];

var registro = [novologin, novasenha]

bancodedados.push(registro);

function incluirCadastro() {
    document.getElementById('popup').style.display = 'none'
}



function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var novologin = document.getElementById('novologin').value;
    var novasenha = document.getElementById('novasenha').value;

    if(senha == novasenha){
        alert('OK')
    }else{
        alert('Algo esta errado!')
    }
}