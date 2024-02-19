const nDados = parseInt(prompt('Digite a quantidade de dados'))
const nLados = parseInt(prompt('Digite a quantidade de lados do dado'))
const nTentativas = parseInt(prompt('Quantas tentativas?'))
let outputFinal = ''

for (i = 1; i <= nTentativas; i++){
    let resRolagem = '\n'
    let sum = 0;
    
    for (j = 1; j <= nDados; j++){
        let dado = Math.floor(Math.random() * nLados + 1)
        resRolagem += (`Dado ${j}: ${dado}\n`)
        sum += dado;
    }
    
    //formatação das strings
    let tentativa = `::::::::::::::: TENTATIVA ${i} :::::::::::::::\n`
    let resDados = `Quantidade de dados (com ${nLados} lados): ${nDados}`
    let resSum = `O somatório dos dados é ${sum}\n\n`
    
    outputFinal += (tentativa + resDados + resRolagem + resSum)
}

alert(outputFinal)