const table = [['X', 'X', 'X'], ['X', 'X', 'X'], ['X', 'X', 'X']]
const p1 = 'X', p2 = 'O'
let player1 = p1, player2 = p2
let gameMode = 1
let draw = Math.floor(Math.random() + 1)
let lastPlayed = ''
let winner = ''


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

//Exibe o tabuleiro
function ShowGameTable(){
    table.forEach(row => {
        console.log(row[0], row[1], row[2])
    });
}

//Modo PVP e PVM
function Turn(e, row, col){
    if((draw == 1 && lastPlayed == '') || (lastPlayed == player2 && e.innerText == '')) {
        e.innerText = player1;
        lastPlayed = player1;

        table[row][col] = e.innerText;
    } else if ((draw == 2 && lastPlayed == '') || (lastPlayed == player1 && e.innerText == '')) {
        e.innerText = player2;
        lastPlayed = player2;

        table[row][col] = e.innerText;
    }

    if(gameMode == 1 && lastPlayed == player1){
        let random = Math.floor(Math.random() * 9 + 1)

        let cell = document.querySelector(`#cell-${random}`);

        while (cell.innerText != '') {
            random = Math.floor(Math.random() * 9 + 1)
            cell = document.querySelector(`#cell-${random}`)
        }
        
        if((draw == 2 && lastPlayed == '') || (lastPlayed == player1 && cell.innerText == '')) {
            cell.innerText = player2;
            lastPlayed = player2;
    
            let targetRow = Math.floor((random - 1) / 3);
            let targetCol = (random - 1) % 3;

            table[targetRow][targetCol] = cell.innerText;
        }
    }
}

/* function Winner(){

} */