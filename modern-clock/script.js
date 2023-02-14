function hora() {

    var data = new Date
    var hora = String(data.getHours()).padStart(2, '0') // Arredondamento caso a hora seja menor que 10, para não exibir hora = 1, e sim 01 
    var minuto = String(data.getMinutes()).padStart(2, '0') // Arredondamento caso os minutos sejam menores que 10...
    var segundo = String(data.getSeconds()).padStart(2, '0') // Arredondamento caso os segundos sejam menores que 10... 
    var dia = String(data.getDay()).padStart(2, '0')
    var campohora = document.getElementById('hora')
    var campodata = document.getElementById('dia')
    
    switch (dia) {
        case '00':
            dia = 'Domingo'    
            break;
        case '01':
            dia = 'Segunda-feira'
            break
        case '02':
            dia = 'Terça-feira'
            break
        case '03':
            dia = 'Quarta-feira'
            break
        case '04':
            dia = 'Quinta-feira'
            break
        case '05':
            dia = 'Sexta-feira'
            break
        case '06':
            dia = 'Sábado'
            break
    }

    campodata.innerHTML = `${dia}`
    campohora.innerHTML = `${hora}:${minuto}:${segundo}`
}    
setInterval(hora,1000);