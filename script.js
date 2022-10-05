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
        document.querySelector('#capture').addEventListener('click', function (e) {
            alert('Algo está errado!')
            var canvas = document.querySelector("#canvas");  
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            var context = canvas.getContext('2d');
            context.drawImage(video, 0, 0)
        })
    }

}
navigator.mediaDevices.getUserMedia({video: true})
.then(function (mediaStream) {
    const video = document.querySelector('#video');
    video.srcObject = mediaStream;
    video.play();
})
