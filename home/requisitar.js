function requisitar (filme){
        console.log(filme)
        $.ajax({
            url: `https://www.omdbapi.com/?apikey=91294ff5&t=${filme}`,
            type: 'GET',

            success: function(result){
                console.log(result)
                $('main').css('display','none');
                $('#info-filme').css('display', 'flex')
                $('#tituloFoto').text(result.Title)
                $('#imagem').attr("src", result.Poster)
                $('#descricaoFoto').text(': ' +result.Plot)
                $('#ano').text(': ' +result.Year)
                $('#genero').text(': ' +result.Genre)
                $('#tempo').text(': ' +result.Runtime)
                
             
            }
        })
    }
