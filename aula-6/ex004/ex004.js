const num = Number(prompt('Digite um número'))
let result = { }

for (let i = 1; i <= 10; i++) {
    result[`${num} X ${i} =`] = num * i;
}

let output = '';
for (let key in result) {
    output += `${key} ${result[key]}\n`;
}

alert(output);