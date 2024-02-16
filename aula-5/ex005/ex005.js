const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (true) {
    const input = Number(prompt('Tente adivinhar o número de 1 a 100:'));

    if (input < 1 || input > 100) {
        alert('Insira um número de 1 a 100.');
        continue;
    }

    tentativas++;

    if (input === numeroAleatorio) {
        alert(`Parabéns, você acertou na ${tentativas}ª tentiva`);
        break;
    } else if (input > numeroAleatorio && tentativas < 5) {
        alert('Chutou alto demais, tente um número menor.');
    } else if (input < numeroAleatorio && tentativas < 5) {
        alert('Baixo demais, tente um número maior.');
    } else {
        alert(`Game Over, o número era ${numeroAleatorio}.`);
        break;
    }
}