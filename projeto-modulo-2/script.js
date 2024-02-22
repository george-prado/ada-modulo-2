const table = [['X', 'X', 'X'], ['X', 'X', 'X'], ['X', 'X', 'X']]
const p1 = 'X', p2 = 'O'
let player1 = 'O', player2 = 'X'
let gameMode = -1
let draw = Math.floor(Math.random() + 1)
let lastPlayed = ''


//Escolhe P1 vs. Comp || P1 vs. P2
function SelectGameMode(){
    const outputLine1 = '::::::::::::::: ESCOLHA COM QUEM DESEJA JOGAR :::::::::::::::\n'
    const outputLine2 = ':::::::::: 1. Jogador vs. Máquina ::::::::::'
    const outputLine3 = ':::::::::: 2. Jogador vs. Jogador ::::::::::'
    
    while (gameMode = -1) {
        let option = Number(prompt(outputLine1 + outputLine2 + outputLine3))
        if (option != 1 || option != 2){
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

function Turn(e){
    if((draw == 1 && lastPlayed == '') || lastPlayed == player2) {
        e.innerText = player1;
        lastPlayed = player1;
    } else if ((draw == 2 && lastPlayed == '') || lastPlayed == player1) {
        e.innerText = player2;
        lastPlayed = player2;
    }
}