const dicionarioDeSinonimos = {};

const adicionarSinonimos = (chave, sinonimo1, sinonimo2, sinonimo3) => {
    const sinonimos = [sinonimo1, sinonimo2, sinonimo3];

    dicionarioDeSinonimos[chave] = sinonimos;
}

adicionarSinonimos("feliz", "alegre", "contente", "satisfeito");
adicionarSinonimos("triste", "melancólico", "abatido", "deprimido");
adicionarSinonimos("bom", "ótimo", "excelente", "maravilhoso");

console.log(dicionarioDeSinonimos.feliz);
console.log(dicionarioDeSinonimos.triste);
console.log(dicionarioDeSinonimos.bom);