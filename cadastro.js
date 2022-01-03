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
