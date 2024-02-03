const idades = [15, 22, 17, 20, 30, 12];

const indices = [];

for (i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    indices.push(i);
  }
}

console.log(indices);
