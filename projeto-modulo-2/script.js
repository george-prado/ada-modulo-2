const table = [['', '', ''], ['', '', ''], ['', '', '']]
const p1 = 'X', p2 = 'O'
let player1 = p1, player2 = p2
let gameMode = 2
let draw = Math.floor(Math.random() * 2 + 1)
let lastPlayed = ''
let winner = ''
let tie = false;
let turnCounter = 0


//Função principal: Partida PVP e PVM
function Turn(e, row, col) {
    if (winner === '') {
        if ((draw === 1 && lastPlayed === '') || (lastPlayed === 'Jogador 2' && e.innerText === '')) {
            e.innerText = player1;
            lastPlayed = 'Jogador 1';

            table[row][col] = e.innerText;
            turnCounter++;
        } else if ((draw === 2 && lastPlayed === '') || (lastPlayed === 'Jogador 1' && e.innerText === '')) {
            e.innerText = player2;
            lastPlayed = 'Jogador 2';

            table[row][col] = e.innerText;
            turnCounter++;
        }

        if (gameMode === 1 && lastPlayed === 'Jogador 1') {
            if (!Winner()) {
                MachineTurn();
            }
        } else {
            Winner();
        }
    }
}

//Função utilitária: Jogadas da máquina
function MachineTurn() {
    let random = Math.floor(Math.random() * 9 + 1);
    let cell = document.querySelector(`#cell-${random}`);

    while (cell.innerText !== '') {
        random = Math.floor(Math.random() * 9 + 1);
        cell = document.querySelector(`#cell-${random}`);
    }

    if ((draw === 2 && lastPlayed === '') || (lastPlayed === 'Jogador 1' && cell.innerText === '')) {
        cell.innerText = player2;
        lastPlayed = 'Jogador 2';

        let targetRow = Math.floor((random - 1) / 3);
        let targetCol = (random - 1) % 3;

        table[targetRow][targetCol] = cell.innerText;
        turnCounter++;

        Winner();
    }
}

//Função utilitária: Exibe o vencedor da rodada
function Winner() {
    let result = document.querySelector('#showResult');

    // Função utilitária: verifica valores das células
    function checkCell(a, b, c) {
        return a === b && b === c && a !== '';
    }

    if (lastPlayed !== '' && turnCounter >= 5) {
        // Condição 1 de ganhar: linhas iguais
        for (let i = 0; i <= 2; i++) {
            if (checkCell(table[i][0], table[i][1], table[i][2])) {
                winner = lastPlayed;
                break;
            }
        }

        // Condição 2 de ganhar: colunas iguais
        for (let i = 0; i <= 2; i++) {
            if (checkCell(table[0][i], table[1][i], table[2][i])) {
                winner = lastPlayed;
                break;
            }
        }

        // Condição 3 de ganhar: diagonais
        if (checkCell(table[0][0], table[1][1], table[2][2]) || checkCell(table[0][2], table[1][1], table[2][0])) {
            winner = lastPlayed;
        }
    }

    if (!winner && turnCounter === 9) {
        tie = true;
    }

    if (winner) {
        if (gameMode === 1 && lastPlayed === 'Jogador 2') {
            result.innerText = 'A máquina venceu!';
        } else {
            result.innerText = `O vencedor é: ${winner}`;
        }
    } else if (tie) {
        result.innerText = 'Deu velha. Jogue novamente.';
    } else {
        result.innerText = '';
        document.getElementById("result").classList.add("hidden");
        return false;
    }

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("game").classList.add("result");
    return true;
}

//Função utilitária: Jogar novamente
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
    tie = false;

    document.querySelector('#showResult').innerText = 'O vencedor é: ';

    for (i = 1; i <= 9; i++){
        let cell = document.querySelector(`#cell-${i}`)
        cell.innerText = ''
    }

    document.getElementById("result").classList.add("hidden")
    document.getElementById("game").classList.remove("result")
    
};

//Função de menu: Escolhe o modo de jogo
document.addEventListener("DOMContentLoaded", function () {
    var modeButtons = document.getElementById("selectMode").querySelectorAll("button");

    modeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.getElementById("selectMode").classList.add("hidden");
            document.getElementById("selectSymbol").classList.remove("hidden");

            gameMode = parseInt(button.value, 10);
        });
    });
});

//Função de menu: Jogador 1 escolhe o símbolo
document.addEventListener("DOMContentLoaded", function () {
    var modeButtons = document.getElementById("selectSymbol").querySelectorAll("button");

    modeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.getElementById("selectSymbol").classList.add("hidden");
            document.getElementById("pregame").classList.remove("hidden");

            if (button.value == 'cross'){
                player1 = p1;
                player2 = p2;
            } else {
                player1 = p2;
                player2 = p1;
            }
        });
    });
});

//Função de menu: Sorteia quem começa
document.addEventListener("DOMContentLoaded", function () {
    var drawButton = document.getElementById("draw-button");
    drawButton.addEventListener("click", function () {
        let drawResult = document.getElementById("draw-text");
        drawResult.classList.remove("hidden");

        if (draw == 1) {
            drawResult.innerText = 'O Jogador 1 começará!';
        } else if (draw == 2) {
            drawResult.innerText = 'O Jogador 2 começará!';
        }

        document.getElementById("draw-button").classList.add("hidden");
        document.getElementById("start-button").classList.remove("hidden");
    });
});

//Função de menu: Pós-sorteio
function StartGame() {
    document.getElementById("pregame").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    if (draw == 2) {
        let random = Math.floor(Math.random() * 9 + 1)
        let cell = document.querySelector(`#cell-${random}`);
        
        while (cell.innerText != '') {
            random = Math.floor(Math.random() * 9 + 1)
            cell = document.querySelector(`#cell-${random}`)
        }

        cell.innerText = player2;
        lastPlayed = 'Jogador 2';

        let targetRow = Math.floor((random - 1) / 3);
        let targetCol = (random - 1) % 3;

        table[targetRow][targetCol] = cell.innerText;
        turnCounter++;
        Winner();
    }
}