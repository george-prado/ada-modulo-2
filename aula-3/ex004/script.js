const dicionarioDeSinonimos = new Map();

dicionarioDeSinonimos.set("Feliz", ["alegre", "contente", "satisfeito"]);
dicionarioDeSinonimos.set("Triste", ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set("Bom", ["ótimo", "excelente", "maravilhoso"]);

//saídas
console.log(dicionarioDeSinonimos.get("Feliz"));
console.log(dicionarioDeSinonimos.get("Triste"));
console.log(dicionarioDeSinonimos.get("Bom"));
