const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

const nomesFiltrados = nomes.filter((nome) => {
    return nome.length >= 5;
})

console.log(nomesFiltrados);
