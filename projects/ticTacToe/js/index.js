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
        if(availableCells()[row].includes(board[row][column])){
            board[row][column].changeValue(playerValue);
            return true
        }
    
        else {
            return false
        }
    }    


    return {getBoard, printBoard, placeToken,}
})();

function cell(){
    let value = 0;

    const getValue = () => value;
    const changeValue = (playerValue) => {value = playerValue};

    return{getValue, changeValue}
}

const gameControlller = (function (
    playerOne = "Player One", playerTwo = "Player Two"
){
    players = [
        {
            name: playerOne,
            token: 1,
        },
        {
            name: playerTwo,
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

    const checkWin = (playerToken) => {
        for(let i = 0; i < 3; i++){
            //row win
            if(gameBoard.printBoard()[i][0] === playerToken && gameBoard.printBoard()[i][1] === playerToken  && gameBoard.printBoard()[i][2] === playerToken){
                return true
            }
            else if(gameBoard.printBoard()[0][i] === playerToken && gameBoard.printBoard()[1][i] === playerToken && gameBoard.printBoard()[2][i] === playerToken){
                return true
            }
        }

        if(gameBoard.printBoard()[0][0] === playerToken && gameBoard.printBoard()[1][1] === playerToken && gameBoard.printBoard()[2][2] === playerToken){
            return true
        }
        else if(gameBoard.printBoard()[0][2] === playerToken && gameBoard.printBoard()[1][1] === playerToken && gameBoard.printBoard()[2][0] === playerToken){
            return true
        }
        else{
            return false
        }  
    }

    const playRound = (row, column) => {
        let playerToken = currentPlayer.token;
        let isValidMove = gameBoard.placeToken(row,column,playerToken);
        let checkWinner = checkWin(playerToken);
        if(isValidMove){
            if(checkWinner){
                console.log(`${currentPlayer.token} wins this round`);
            }
            else{
                switchPlayer();
            }
        }
        else{

        }
        
    }


    return{getCurrentPlayer, playRound}
})();

const displayController = () => {
    const game = gameBoard;

}