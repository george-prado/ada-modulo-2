novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]
let count = 0

/* //jeito sem graça
console.log(novoArray.sort()) */

//jeito divertido
arrayOrdenado = []

//for pra percorrer todo o array
for (let i = 0; i < novoArray.length; i++) {
    count++
    let menorNumero = novoArray[i];
    let indexMenorNumero = i

    //for pra descobrir se o primeiro número é maior que o segundo
    for (let j = i + 1; j < novoArray.length; j++) {
        if (novoArray[j] < menorNumero) {
            menorNumero = novoArray[j]
            indexMenorNumero = j
        }
    }

    //troca eles de posição
    if (indexMenorNumero !== i) {
        [novoArray[i], novoArray[indexMenorNumero]] = [novoArray[indexMenorNumero], novoArray[i]]
    }

    arrayOrdenado.push(menorNumero)
}

console.log(arrayOrdenado)