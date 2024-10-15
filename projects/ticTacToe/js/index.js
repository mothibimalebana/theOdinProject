const gameBoard = (function () {
    const row = 3;
    const column = 3;
    let board = [];

    for(let i = 0; i < row; i++){
        board[i] = [];
        for(let j = 0; j < column; j++){
            board[i].push(cell())
        }
    }

    const getBoard = () => board;

    return {getBoard}
})();

function cell(){
    let value = 0;

    const getValue = () => value;
    const changeValue = (playerValue) => {value = playerValue};

    return{getValue, changeValue}
}