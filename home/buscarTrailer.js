function mostrar(){ //função feita para abrir o trailer dos filmes do catálogo
       var titulo = document.querySelector('#tituloFoto').innerText
        if(titulo == 'Fear Street: Part One - 1994'){   //se o titulo é igual o do filme aberto
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/UrkAJDRo_-E")   //adiciona essa url
        }
        if(titulo == 'The Witch'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/FE-u6RznkGQ")   
        }
        if(titulo == 'Us'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/ozBlLM3F2oI")   
        }
        if(titulo == 'Insidious'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/0AHVW_yenRs")   
        }
        if(titulo == 'White Chicks'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/aeVkbNka9HM")   
        }
        if(titulo == 'Big Daddy'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/jxnccxgybUI")   
        }
        if(titulo == 'Seriously Single'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/pCOBgo0EV4M")   
        }
        if(titulo == '13 Going on 30'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/NV7PBRBcxu0")   
        }
        if(titulo == 'The Lord of the Rings: The Fellowship of the Ring'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/0i86oM1nHjM")   
        }
        if(titulo == 'Shrek'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/CwXOrWvPBPk")   
        }
        if(titulo == 'Coco'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/iLmZZV-Nkuk")   
        }
        if(titulo == 'Love, Rosie'){
            console.log(titulo)
            $('iframe').attr('src', "https://www.youtube.com/embed/cuilBGtYI18")   
        }
        
}


