function resetGameStatus(){
    activePlayer =0;
    currentRound =1;
    gameIsOver = false
    gameOver.firstElementChild.innerHTML= 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOver.style.display='none';
    let gameBoardIndex =0;
    for(let i = 0; i<3; i++){
        for (let j = 0; j < 3; j++) {
            gaming[i][j]=0;
            const gameBoardItem = gameBoard.children[gameBoardIndex];
            gameBoardItem.textContent='';
            gameBoardItem.classList.remove('disabled')
            gameBoardItem.classList.remove('abc')
            gameBoardIndex++;
        }
    }
}

function startNewGame() {

    if (players[0].name === '' || players[1].name === '') {
        alert('please enter a custom name.');
        return;
    }

    resetGameStatus();

    activeplayername.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
}

function switchPlayer() {

    if (activePlayer === 0){
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }

    activeplayername.textContent = players[activePlayer].name;
}

function selectGameFields(Event) {


    if (Event.target.tagName != 'LI' || gameIsOver) {
        return;
    }

    const selectedField = Event.target;
    const selectedRow = selectedField.dataset.row - 1;
    const selectedCol = selectedField.dataset.col - 1;

    if (gaming[selectedRow][selectedCol] > 0) {
        alert('please select an empty field!')
        return;
    }

    gaming[selectedRow][selectedCol] = activePlayer + 1;

    selectedField.textContent = players[activePlayer].symbol;
    // selectedField.classList.add('disabled');
    if(activePlayer === 0){
        selectedField.classList.remove('disabled');
        selectedField.classList.add('abc');
    }
    else if ( activePlayer === 1){
        selectedField.classList.remove('abc');
        selectedField.classList.add('disabled');
    }

    const winnerId = checkForGameOver();
    if(winnerId != 0){
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();

}

function checkForGameOver() {

    //check for row

    for (let i = 0; i < 3; i++) {

        if (gaming[i] [0] > 0 &&
            gaming[i][0] === gaming[i][1] &&
            gaming[i][1] === gaming[i][2]
        ) {
            return gaming[i][0];
        }
    }

    //check for col

    for (let i = 0; i < 3; i++) {

        if (gaming[0][i] > 0 &&
            gaming[0][i] === gaming[1][i] &&
            gaming[1][i] === gaming[2][i]
        ) {
            return gaming[0][i];
        }
    }

    // for principal diagonal

    if (gaming[0][0] > 0 &&
        gaming[0][0] === gaming[1][1] &&
        gaming[1][1] === gaming[2][2]
    ) {
        return gaming[1][1];
    }

    // for second diagonal

    if (gaming[0][2] > 0 &&
        gaming[0][2] === gaming[1][1] &&
        gaming[2][0] === gaming[1][1]
    ) {
        return gaming[1][1];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;

}


function endGame(winnerId) {
    gameIsOver = true;
    gameOver.style.display = 'block';

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOver.firstElementChild.firstElementChild.textContent = winnerName;
    }
    else{
        gameOver.firstElementChild.textContent = 'It\'s a draw';
    }
}