let numAleatorio = Math.floor(Math.random() * 100 + 1)
let input = -1;

do {
    let input = Number(prompt('Tente adivinhar o número de 1 a 100:'))

    if ((input - numAleatorio) > 0) {
        alert('Chutou alto demais, tente um número menor');
    } else if ((input - numAleatorio) < 0) {
        alert('Baixo demais, tente um número maior');
    } else if ((input - numAleatorio) == 0) {
        alert('Parabéns, você acertou!')
        break;
    } else {
        alert('Insira um número válido'); break;
    }
} while (input != numAleatorio)