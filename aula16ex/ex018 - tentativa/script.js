var numeros = [] // array com os números
var campo = document.getElementById('numadc') // área do select
var res = document.getElementById('res') // área do resultado

function adicionar() {
    var txtn = document.getElementById('txtnum')
    var n = Number(txtn.value)
    if (res.innerHTML !== '') { // limpar a área do resultado ao enviar um novo número
        res.innerHTML = ''
    }
    if (numeros.indexOf(n) != -1 || n > 100 || n < 1) { // validação do número
        alert('Valor inválido ou já encontrado na lista.')
    } else { // adicionar os números na array e criar o option no select (caso passe na validação)
        numeros.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        campo.appendChild(item)
    }
}

function finalizar() {
    if (campo.innerHTML === '') { // verificar se nenhum número foi adicionado
        alert('Adicione valores antes de finalizar!')
    } else {
        var soma = 0
        for(c = 0; c <= (numeros.length - 1); c++) { // fazer a soma dos números (poderia ter usado um "for in")
            soma += numeros[c]
        }
        var nsort = numeros.sort(function(a, b){return a - b}) // ordenar os números em ordem crescente
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>` // quantidade de números
        res.innerHTML += `<p>O maior valor informado foi ${nsort[numeros.length -1]}.</p>` // maior número (último da lista)
        res.innerHTML += `<p>O menor valor informado foi ${nsort[0]}.</p>` // menor número (primeiro da lista)
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>` // soma
        res.innerHTML += `<p>A média dos valores digitados é ${soma / numeros.length}` // média
    }   
}