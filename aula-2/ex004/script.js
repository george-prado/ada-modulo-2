let vetor1 = [1, 2, 3, 4, 5, 6, 7];
let vetor2 = [1, -1, 1, -1, 1, -1, 1];

let produto =
  vetor1[0] * vetor2[0] +
  vetor1[1] * vetor2[1] +
  vetor1[2] * vetor2[2] +
  vetor1[3] * vetor2[3] +
  vetor1[4] * vetor2[4] +
  vetor1[5] * vetor2[5] +
  vetor1[6] * vetor2[6]

console.log(produto);


/* //Jeito mais divertido de resolver pra qualquer tamanho de array

let soma = 0;

const resultado = [];
for (i = 0; i < (vetor1.length && vetor2.length); i++) {
  resultado[i] = vetor1[i] * vetor2[i];
}

resultado.forEach((entry) => {
  soma += entry;
});

console.log(soma);
 */