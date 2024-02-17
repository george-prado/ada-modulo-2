const vowels = ['a', 'e', 'i', 'o', 'u']
const word = 'Elétrico'
const treatedWord = removeAccent(word)
let count = 0

for (i = 0; i < word.length; i++){
    if(vowels.includes(treatedWord[i])){
        count++
    }
}

console.log(`Essa palavra tem ${count} vogais`)


function removeAccent(word){
    let treatedWord = word.toLocaleLowerCase()
                          .replace(/[áàãâä]/g, 'a') //mais rápido que fazer replace um por um
                          .replace(/[éèêë]/g, 'e')  
                          .replace(/[íìîï]/g, 'i')
                          .replace(/[óòõôö]/g, 'o')
                          .replace(/[úùûü]/g, 'u')

    return treatedWord
}