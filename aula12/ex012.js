var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos} horas.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 && hora > 0) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}