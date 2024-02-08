const aluno = {
    nome: 'Bob',
    nota1: 8,
    nota2: 6.5
}

const media = (aluno.nota1 + aluno.nota2) / 2

//saída
console.log(`O aluno ${aluno.nome} foi aprovado? R: ${media >= 7}`)