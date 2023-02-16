var numeros = []
var campo = document.getElementById('numadc')
var res = document.getElementById('res')

function adicionar() {
    var txtn = document.getElementById('txtnum')
    var n = Number(txtn.value)
    if (res.innerHTML !== '') {
        res.innerHTML = ''
    }
    if (numeros.indexOf(n) != -1 || n > 100 || n < 1) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        numeros.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        campo.appendChild(item)
    }
}

function finalizar() {
    if (campo.innerHTML === '') {
        alert('Adicione valores antes de finalizar!')
    } else {
        var soma = 0
        for(c = 0; c <= (numeros.length - 1); c++) {
            soma += numeros[c]
        }
        var nsort = numeros.sort(function(a, b){return a - b})
        res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p><p>O maior valor informado foi ${nsort[numeros.length -1]}.</p><p>O menor valor informado foi ${nsort[0]}.</p><p>Somando todos os valores, temos ${soma}.</p><p>A média dos valores digitados é ${soma / numeros.length}`
    }   
}