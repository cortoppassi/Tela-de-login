function cadastrese() {
    document.getElementById('popup').style.display = 'block';
}

function incluirCadastro() {
    document.getElementById('popup').style.display = 'none';
}

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var novologin = document.getElementById('novologin').value;
    var novasenha = document.getElementById('novasenha').value;

    if(senha == novasenha && login == novologin){
        alert('OK')
    }else{
        alert('Algo esta errado!')
    }
}