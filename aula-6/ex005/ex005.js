const values = { valor1: 10, valor2: 20, valor3: 30, valor4: 40 }
let sum = 0;

for (let value in values) {
    sum += values[value]
}

console.log(sum)