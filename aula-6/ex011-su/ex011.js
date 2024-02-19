const nDados = parseInt(prompt('Digite a quantidade de dados'));
const nLados = parseInt(prompt('Digite a quantidade de lados do dado'));
let sum = 0;

let resDados = `Quantidade de dados: ${nDados}\n`
let resLados = `Obs: dados com ${nLados} lados\n`
let resRolagem = '\n'

for (i = 1; i <= nDados; i++){
    let dado = Math.floor(Math.random() * nLados + 1)
    resRolagem += (`Dado ${i}: ${dado}\n`);
    sum += dado;
}

let resSum = `\nO somatório dos dados é ${sum}`
alert(resDados + resLados + resRolagem + resSum)