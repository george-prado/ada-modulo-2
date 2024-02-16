const num = parseInt(prompt('Insira um número'))
let contador = 2;
let ehPrimo = true;

while (contador <= num/2) {
    if (num % contador == 0) {
        ehPrimo = false;
        break;
    } else {
        contador++;
        continue;
    }
}

alert(`O número é primo? R: ${ehPrimo}`)