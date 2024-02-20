const arr = [1,2,2,3,5]
let highSum = 0;
let lowSum = 0;

const maiorNum = Math.max(...arr)
const menorNum = Math.min(...arr)

arr.splice(arr.indexOf(maiorNum), 1)

for(i = 0; i < arr.length; i++){
    lowSum += arr[i]
}

arr.push(maiorNum)

arr.splice(arr.indexOf(menorNum), 1)
for(i = 0; i < arr.length; i++){
    highSum += arr[i]
}

const ansArr = [lowSum, highSum]

console.log(ansArr)