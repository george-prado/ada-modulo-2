const frutas = new Map()

frutas.set("maçã", 5.99)
frutas.set("abacaxi", 7.49)
frutas.set("uva", 9.29)
frutas.set("pêra", 4.99)
frutas.set("banana", 6.99)

//saídas
console.log(`Maçã é mais caro que Banana? R: ${frutas.get("maçã") > frutas.get("banana")}`)
console.log(`Pêra é mais caro que Uva? R: ${frutas.get("pêra") > frutas.get("uva")}`)