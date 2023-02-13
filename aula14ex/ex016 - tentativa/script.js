function contar() {
    var txtini = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpas = document.getElementById('passo')
    var inicio = Number(txtini.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpas.value)
    var res = document.getElementById('res')
    res.innerHTML = ''
    res.innerHTML += `Contando: <br>`
    if (txtini.value.length == 0 || txtfim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (passo == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        passo = 1
        if (fim >= inicio) {
            for(var c=inicio; c<=fim; c+=passo) {
                res.innerHTML += `${c} &#x1F449 `
            }
            res.innerHTML += ` &#x1F3C1`
        } else if (fim <= inicio) {
            for(var c=inicio; c>=fim; c-=passo) {
                res.innerHTML += `${c} &#x1F449 `
            }
            res.innerHTML += ` &#x1F3C1`
        }
    } else if (fim >= inicio) {
        for(var c=inicio; c<=fim; c+=passo) {
            res.innerHTML += `${c} &#x1F449 `
        }
        res.innerHTML += ` &#x1F3C1`
    } else if (fim <= inicio) {
        for(var c=inicio; c>=fim; c-=passo) {
            res.innerHTML += `${c} &#x1F449 `
        }
        res.innerHTML += ` &#x1F3C1`
    }
}