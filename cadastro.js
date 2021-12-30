// verificar email
$("#inputEmail4").blur(function(){
    console.log("funciona")
    let email = $("#inputEmail4").val()

   
        if(email.indexOf("@") > -1){
            console.log("está certo")
            $("#email-Invalido").hide()
        } else {
            $("#email-Invalido").text("Email inválido")
        }
   
})
