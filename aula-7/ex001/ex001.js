const Calc = ((n1, n2, op) => {
    /* const condition = n1 !== 0 && n2 !== 0 ? n1/n2 : "Insira um valor válido"; */
    switch (op) {
        case "+": return n1 + n2;
        case "-": return n1 - n2;
        case "/": return n1 / n2;
        case "*": return n1 * n2;
    }
})

console.log(Calc(0, 6, "/"))