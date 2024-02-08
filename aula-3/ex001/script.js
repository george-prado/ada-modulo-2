const listaDeCompras = new Map()

listaDeCompras.set("Maçã", 5)
listaDeCompras.set("Banana", 3)
listaDeCompras.set("Leite", 4)
listaDeCompras.set("Pão", 9)


console.log(`Contém 'leite' no map: ${listaDeCompras.has("Leite")}`)
console.log(`"Pão" tem valor ${listaDeCompras.get("Pão")}`)

listaDeCompras.set("Pão", 5)
console.log(`"Pão" agora tem valor ${listaDeCompras.get("Pão")}`)

listaDeCompras.delete("Pão")
console.log(listaDeCompras.get("Pão"))