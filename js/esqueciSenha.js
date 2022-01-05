    document.getElementById("envie").addEventListener("click", function(event){
        event.preventDefault()
      });

    $("#exampleInputEmail1").blur(function(){
        let email = $("#exampleInputEmail1").val()
            if(email.indexOf("@") > -1){
                $("#email-valido").text("Um link de recuperação foi enviado para o seu e-mail!")
            } else {
                $("#email-invalido").text("E-mail inválido, por favor tente novamente")
            }
    })