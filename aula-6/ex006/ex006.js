const num = [1,2,3,4,5,6,7,8,9,10] 
let desiredNum = 11
let count = 0

for (i = 0; i < num.length; i++){
    let found = num[i] == desiredNum ? true : false
    count++

    if(found){
        console.log(`Encontrei o número ${desiredNum} na ${count}ª tentativa!`)
        break;
    }
    else if (count >= 10 && !found){
        console.log(`O número ${desiredNum} não faz parte da lista.`)
    }
}