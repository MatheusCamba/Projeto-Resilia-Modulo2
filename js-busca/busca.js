
    $("#buscaFilme").submit((result) => {
        result.preventDefault()
        let filme = $("#filme").val()
        let retorno;
        
            $.ajax({
                
                url: `http://www.omdbapi.com/?i=tt3896198&apikey=1a6df36&t=${filme}&plot=full`,
                success: (data) => {
                    if (data.Response == "False") throw new Error(alert("Digite um nome válido!"));
                    console.log(data)
                    retorno = `
                    <img id="retornoImg" src="${data.Poster}">
                    <div id = "texto">
                    <h3>Título: ${data.Title}</h3>
                    <h4>Lançamento: ${data.Year}</h4>
                    <h4>País de Origem: ${data.Country}</h4>
                    <h4>Gênero: ${data.Genre}</h4>
                    <h4>Duração: ${data.Runtime}</h4>
                    <h4>IMBD: ${data.imdbRating}</h4>
                    <h4>Número de votos: ${data.imdbVotes}</h4>
                    </div>
                    <p id="sinopse">Sinopse: ${data.Plot}</p>
                    
                    `;
                    $("#retorno").html(retorno);
                }
            })
         
    })
