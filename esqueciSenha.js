let enviar = document.getElementById('enviar')
let res = document.getElementById('msg')
let emailInserido = document.getElementById('exampleInputEmail1')

    function enviar() {
        let email = emailInserido.val()

            if(email.indexOf('@') > -1){
                res.innerHTML('Um link de recuperação foi enviado para o seu email')
            } else {
                res.innerHTML('E-mail inválido, por favor tente novamente')
            } 
        }
