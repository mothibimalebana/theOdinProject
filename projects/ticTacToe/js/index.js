(function gameBoard() {
    const row = 3;
    const column = 3;
    let board = [];

    for(let i = 0; i < row; i++){
        board = [];
        for(let j = 0; j < column; j++){
            board.push(console.log(`row: ${i} \ncolumn: ${j}`))
        }
    }
})();