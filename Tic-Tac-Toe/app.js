const gaming = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


let editedPlayerid = 0;
let activePlayer = 0;
let currentRound =1;
let gameIsOver = false;

const players =[

    {
        name:'',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    }

]

const confiOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const gameBtn = document.getElementById('start-game-btn');
const activeplayername = document.getElementById('active-playername');
const gameOver = document.getElementById('game-over');

const editPlayer1btn = document.getElementById('edit-player-1');
const editPlayer2btn = document.getElementById('edit-player-2');
const cancelConfig = document.getElementById('cancel-config');
const configError = document.getElementById('config-error');
const gameArea = document.getElementById('active-game');
//const listItems = document.querySelectorAll('#game-board li');
const gameBoard = document.getElementById('game-board');

editPlayer1btn.addEventListener('click',openPlayerConfig);
editPlayer2btn.addEventListener('click',openPlayerConfig);

cancelConfig.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);
gameBtn.addEventListener('click', startNewGame);

gameBoard.addEventListener('click', selectGameFields);

// for(const listItem of listItems ){
//     listItem.addEventListener('click', selectGameFields);
// }