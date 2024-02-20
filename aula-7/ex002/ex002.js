let saldo = 0;

menu()

function menu(){
    const menu = '::::::::::::::: MENU :::::::::::::::\n'
    const op1 = '1. Depósito\n'
    const op2 = '2. Saque\n'
    const op3 = '3. Saldo\n'
    const op4 = '4. Sair'
    
    let alternativa = 0
    alert(menu + op1 + op2 + op3 + op4)
    alternativa = parseInt(prompt('Digite sua opção desejada:'))

    switch(alternativa){
        case 1: depositar(); break;
        case 2: sacar(); break;
        case 3: verSaldo(); break;
        case 4: alert('Obrigado por usar nossos serviços, até a próxima!'); break;
    }
}

function depositar(){
    const valor = Number(prompt('Qual valor deseja depositar?').replace(',', '.'))
    
    if(saldo != 0){
        saldo += valor;
    } else {
        saldo = valor;
    }
    alert(`Você depositou R$${valor}`)
    menu()
}

function sacar(){
    const valor = parseFloat(prompt('Qual valor deseja sacar?').replace(',', '.')).toFixed(2)
    saldo -= valor;
    alert(`Você sacou R$${valor}`)
    menu()
}

function verSaldo(){
    alert(`O seu saldo é de R$${saldo}`)
    menu()
}