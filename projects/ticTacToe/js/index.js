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
    const placeToken = (row, column, playerValue) => board[row][column].changeValue(playerValue)    


    return {getBoard, printBoard, placeToken, availableCells}
})();

function cell(){
    let value = 0;

    const getValue = () => value;
    const changeValue = (playerValue) => {value = playerValue};

    return{getValue, changeValue}
}