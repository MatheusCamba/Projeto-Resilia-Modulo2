$("#inputCEP").blur(function(){
    let cep = $("#inputCEP").val()
    const url =  `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
        url: url,
        type:"GET", 
        success : function(dados){
            console.log(dados)
            $("#inputEstado").val(`${dados.uf}`)
            $("#inputCity").val(`${dados.localidade}`)
            $("#inputBairro").val(`${dados.bairro}`)
            $("#inputRua").val(`${dados.logradouro}`)
            $()
        }
    })
})