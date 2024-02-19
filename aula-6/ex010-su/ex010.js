let n = parseInt(prompt('Digite a quantidade de dados'));
let sum = 0;
let ans = '\n'

for (i = 1; i <= n; i++){
    let dado = Math.floor(Math.random()*6 + 1)
    ans += (`Dado ${i}: ${dado}\n`);
    sum += dado;
}

alert(`Quantidade de dados: ${n}\n` + ans + `\nO somatório dos dados é ${sum}`)