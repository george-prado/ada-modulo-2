let numeros = [];
let soma = 0;

while (true) {
    let input = Number(prompt('Digite um número inteiro qualquer'));

    if (input === 0) {
        break;
    }

    numeros.push(input);
    soma += input;
}

alert(`O somatório dos números digitados (${numeros}) é: ${soma}`);