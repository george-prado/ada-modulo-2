const notas = [8, 9, 7, 5, 10, 6];

const maiorNota = Math.max(...notas);
const menorNota = Math.min(...notas);

const notasFiltradas = notas.filter((nota) => {
  return nota != maiorNota && nota != menorNota;
});

let media = 0;

for (i = 0; i < notasFiltradas.length; i++) {
  media += notasFiltradas[i] / notasFiltradas.length;
}
console.log(media);
