const gameBoard = (function () {
    const row = 3;
    const column = 3;
    let board = [];

    //3x3 Grid
    for(let i = 0; i < row; i++){
        board[i] = [];
        for(let j = 0; j < column; j++){
            board[i].push(cell())
        }
    }

    const availableCells = () => board.map((row) => row.filter((cell) => cell.getValue() === 0));
    const getBoard = () => board;

    const printBoard = () => board.map((row) => row.map((cell) => cell.getValue()));
    const placeToken = (row, column, playerValue) => {
        if(availableCells().includes(board[row][column])){
            board[row][column].changeValue(playerValue);
        }
    
        else return;
    }    


    return {getBoard, printBoard, placeToken}
})();

function cell(){
    let value = 0;

    const getValue = () => value;
    const changeValue = (playerValue) => {value = playerValue};

    return{getValue, changeValue}
}

const gameControlller = (function (){
    players = [
        {
            token: 1,
        },
        {
            token: 2,
        },
    ];

    let currentPlayer = players[0];

    const switchPlayer = () => {
        if(currentPlayer === players[0]){
            currentPlayer = players[1];
        }
        else{
            currentPlayer = players[0];
        }
    }

    const getCurrentPlayer = () => currentPlayer;

    const playRound = (row, column) => {
        let playerToken = currentPlayer.token;
        gameBoard.placeToken(row, column, playerToken); 
    }


    return{players, switchPlayer, getCurrentPlayer}
})();