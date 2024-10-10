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

    const printBoard = () => {
        
    }

    return {getBoard, }

})();

function cell() {
    let value = 0;

    getValue = () => value;
    addToken = (token) => { value = token};

    return {getValue, addToken}
}

const gameController = (function (
    playerOne = 'PlayerOne',
    playerTwo = 'PlayerTwo'
){
    const players = [
        {
            name: playerOne,
            token: 1
        },
        {
            name: playerTwo,
            token: 2
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

    return {players, switchPlayer, getCurrentPlayer}
})();