let n = 5

for (i = 0; i <= n; i++){
    let space = ' '.repeat(n-i)
    let symbol = '#'.repeat(i)
    console.log(space + symbol)
}