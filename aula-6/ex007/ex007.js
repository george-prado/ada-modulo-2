const lim = Number(prompt('Digite quantos termos quer exibir'));
const fibonacci = []
let start = 0;
let next = 1;

for (i = 0; i < lim; i++){
    fibonacci.push(start)
    let temp = next
    next += start;
    start = temp;
}

alert(fibonacci)