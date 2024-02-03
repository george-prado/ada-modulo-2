const numeros = [3, 8, 15, 21, 30, 37, 42]

const numPares = numeros.filter((numero) => {
    return numero % 2 == 0;
})

console.log(numPares);