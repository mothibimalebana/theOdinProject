const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(cell())
        }
    }

    const getBoard = () => board;

    const printGameBoard = () => {
        const boardCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardCellValues);
    }

    return{getBoard, printGameBoard}
})();

function cell(){
    let value = 0;

    const getValue = () => value;

    const addToken = (player) => {
        value = player;
    }

    return {getValue, addToken}
}

function gameController (
    playerOne = "Player One",
    playerTwo = "Player Two"
) {
    const players = [
        {
            name: playerOne,
            token: 1,

        },
        {
            name: playerTwo,
            token: 2,

        }
    ]

    const placetoken = (row, column, player) => {
        gameBoard.getBoard()[row][column].addToken(player)
    }

    const availableCell = gameBoard.getBoard().map((row) => row.filter((cell) => cell.getValue() === 0));

    if(!availableCell.length) return 

    return {placetoken, availableCell}
}