// verificar email
$("#inputEmail4").blur(function(){
    console.log("funciona")
    let email = $("#inputEmail4").val()
    let emailPadrao = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
   
        if(emailPadrao.test(email) == true){
            console.log("email correto")
            $("#email-Invalido").hide()
        } else{
            $("#email-Invalido").show()
            $("#email-Invalido").text("Email inválido")
        }
   
})

//verificar se o form está completo
$("#submit").click(function(){
    console.log("fui clicado")
    let email = $("#inputEmail4").val()
    let senha = $("#inputPassword").val()
    let confirmSenha = $("#inputPasswordConfirm").val()
    let rg = $("#inputRG").val()
    let cep = $("#inputCEP").val()

    if(email === "" || senha === "" || confirmSenha === "" || rg === "" || cep === "" ){
        alert("Complete o formulário por favor.")
    } else{
        return window.location.assign('./cadastro-feito.html')
    }

})

//verificar se o form login está completo
$("#entrar").click(function(){
    console.log("clicado")
    let email = $("#inputEmail4").val()
    let senha = $("#exampleInputPassword1").val()

    if(email === "" && senha === ""){
        alert("Insira o email e a senha")
    } else if(email === ""){
        alert("Insira a email")
    } else if(senha === ""){
        alert("Insira a senha")
    } else {
        return window.location.assign("./home/home.html")
    }
})