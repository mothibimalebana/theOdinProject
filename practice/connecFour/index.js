function gameBoard () {
    
    const rows = 6;
    const columns = 7;
    const board = [];

    for(let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const dropToken = (column, player) => {
        const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

        if (!availableCells.length) return;

        const printBoard = () => {
            const boardWithCelllValues = board.map((row) => row.map((cell) => cell.getValue()))
            console.log(boardWithCelllValues);
        };
    
        return {getBoard,dropToken, printBoard}
    }
}

function cell() {
    let value = 0;

    const addToken = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        addToken,
        getValue
    };
}