const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(cell())
        }
    }

    const getBoard = () => board;

    const printToken = (row,column, player) => {
        if(availableCells()[row].includes(board[row][column])){
            board[row][column].addToken(player);
        }

        else {
            return;
        }
    }

    const printBoard = () => board.map((row) => row.map((cell) => cell.getValue()));

    const availableCells = () => board.map((row) => row.filter((cell) => cell.getValue() === 0));

    



    return {getBoard, printBoard, printToken, availableCells}

})();

function cell() {
    let value = 0;

    getValue = () => value;
    addToken = (token) => { value = token};

    return {getValue, addToken}
}

const gameController = (function (){
    const players = [
        {
            token: 1,
        },
        {
            token: 2,
        }
    ]

    let currentPlayer = players[0];

    const switchPlayer = () => {
        if(currentPlayer === players[0]) {
            currentPlayer = players[1];
        }
        else if(currentPlayer === players[1]) {
            currentPlayer === players[0];
        }
    }

    const getCurrentPlayer = () => currentPlayer;
    const board = () => gameBoard.printBoard();

    const playRound = (row, column,) => {
        gameBoard.printToken(row, column, currentPlayer.token);
        switchPlayer();
        console.log(board());
    }
    function playerOccupiedCells(){
        board().map((row) => row.filter((cell) => cell.getValue() === currentPlayer.token))
    }
    const winConditions = [
        //Row
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],

        //Diagonal
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]],
    
        //Columns
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
    ]

    return {players, switchPlayer, getCurrentPlayer, playRound, winConditions, playerOccupiedCells}
})();