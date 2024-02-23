const table = [['', '', ''], ['', '', ''], ['', '', '']]
const p1 = 'X', p2 = 'O'
let player1 = p1, player2 = p2
let gameMode = 2
let draw = Math.floor(Math.random() + 1)
let lastPlayed = ''
let winner = ''
let turnCounter = 0


//Escolhe P1 vs. Máquina || P1 vs. P2
function SelectGameMode(){
    const outputLine1 = '::::::::::::::: ESCOLHA COM QUEM DESEJA JOGAR :::::::::::::::\n'
    const outputLine2 = ':::::::::: 1. Jogador vs. Máquina ::::::::::'
    const outputLine3 = ':::::::::: 2. Jogador vs. Jogador ::::::::::'
    
    while (gameMode == -1) {
        let option = Number(prompt(outputLine1 + outputLine2 + outputLine3))
        if (option != 1 && option != 2){
            alert('Entre com um modo de jogo válido');
        } else {
            gameMode = option;
            break;
        }
    }
}

//Escolhe se quer X ou O
function SymbolSelect(){
    let choose = prompt('Qual símbolo deseja usar? Digite X ou O')

    if(choose == 'X'){
        player1 = p1;
        player2 = p2;
    } else if (choose == 'O'){
        player1 = p2;
        player2 = p1;
    }
}

//Modo PVP e PVM
function Turn(e, row, col){
    if (winner == '') {
        if((draw == 1 && lastPlayed == '') || (lastPlayed == 'Jogador 2' && e.innerText == '')) {
            e.innerText = player1;
            lastPlayed = 'Jogador 1';
    
            table[row][col] = e.innerText;
            turnCounter++;
        } else if ((draw == 2 && lastPlayed == '') || (lastPlayed == 'Jogador 1' && e.innerText == '')) {
            e.innerText = player2;
            lastPlayed = 'Jogador 2';
    
            table[row][col] = e.innerText;
            turnCounter++;
        }
    
        if(gameMode == 1 && lastPlayed == 'Jogador 1'){
            let random = Math.floor(Math.random() * 9 + 1)
    
            let cell = document.querySelector(`#cell-${random}`);
    
            while (cell.innerText != '') {
                random = Math.floor(Math.random() * 9 + 1)
                cell = document.querySelector(`#cell-${random}`)
            }
            
            if((draw == 2 && lastPlayed == '') || (lastPlayed == 'Jogador 1' && cell.innerText == '')) {
                cell.innerText = player2;
                lastPlayed = 'Jogador 2';
        
                let targetRow = Math.floor((random - 1) / 3);
                let targetCol = (random - 1) % 3;
    
                table[targetRow][targetCol] = cell.innerText;
                turnCounter++;
            }
        }
        Winner()
    }
    
}

//Exibe o vencedor da rodada
function Winner(){
    let result = document.querySelector('#showResult');

    //função utilitária: verifica valores das células
    function checkCell(a, b, c) {
        return a === b && b === c && a !== '';
    }

    if (lastPlayed != '' && turnCounter >= 5) {

        //Condição 1 de ganhar: linhas iguais
        for (let i = 0; i <= 2; i++) {
            if (checkCell(table[i][0], table[i][1], table[i][2])) {
                winner = lastPlayed;
                break;
            }
        }

        //Condição 2 de ganhar: colunas iguais
        for (let i = 0; i <= 2; i++) {
            if (checkCell(table[0][i], table[1][i], table[2][i])) {
                winner = lastPlayed;
                break;
            }
        }
        
        //Condição 3 de ganhar: diagonais
        if (checkCell(table[0][0], table[1][1], table[2][2]) || checkCell(table[0][2], table[1][1], table[2][0])) {
            winner = lastPlayed;
        }
    }
    
    result.innerText = `O vencedor é: ${winner}`;
}

//Reseta o game
function ResetGame() {
    table.forEach(row => {
        row[0] = '';
        row[1] = '';
        row[2] = '';
    });

    draw = Math.floor(Math.random() + 1);
    lastPlayed = '';
    winner = '';
    player1 = p1;
    player2 = p2;
    turnCounter = 0;
    gameMode = -1;

    document.querySelector('#showResult').innerText = 'O vencedor é: ';

    for (i = 1; i <= 9; i++){
        let cell = document.querySelector(`#cell-${i}`)
        cell.innerText = ''
    }
}