var textAlert = document.getElementById('textAlert');
var btnSend = document.getElementById('btnSend');

const input = document.querySelectorAll('input');
const msgArray = ['nameMsg','emailMsg','telMsg','cpfMsg','senhaMsg'];

btnSend.addEventListener('click', function() {
for(let i = 0;i<input.length;i++){
    if(input[i].value == ""){
        let field = document.getElementById(msgArray[i]);
        field.style.display = 'block';
        errorMsg()
    }else{
        sucessoMsg()
    }
}})

function sucessoMsg(){
textAlert.style.color = '#0F7B0F'
textAlert.innerText = 'Sucesso!'
textAlert.classList.remove('hidden')
}

function errorMsg(){
textAlert.style.color = "#E73550"
textAlert.innerText = "Campos obrigatórios não registrados."
textAlert.classList.remove('hidden')
}

    
