const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(cell)
        }
    }


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
    players[
        {
            name: playerOne,
            token: 1
        },
        {
            name: playerTwo,
            token: 2
        }
    ]
})();