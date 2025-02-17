// variable

let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;

const winsAgainst = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const roundPlayedArea = document.querySelector('.round-played');

const playerScoreArea = document.querySelector('.player-score');
const computerScoreArea = document.querySelector('.computer-score');
const buttonRock = document.querySelector('.rock')
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');
const roundResult = document.querySelector('.round-result');

buttonRock.addEventListener('click', () => gameRound('rock'));
buttonPaper.addEventListener('click', () => gameRound('paper'));
buttonScissors.addEventListener('click', () => gameRound('scissors'));


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    let randomComputerChoice = Math.floor(Math.random()*3);
    return choices[randomComputerChoice]
}

function gameRound(playerChoice){
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        roundResult.textContent = "It's a tie!";
        roundPlayed++;
        roundPlayedArea.textContent = roundPlayed;
    }

    else if (winsAgainst[playerChoice] === computerChoice){
        roundResult.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++
        roundPlayed++;
        roundPlayedArea.textContent = roundPlayed;
        playerScoreArea.textContent = playerScore;

    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
        roundPlayed++;
        roundPlayedArea.textContent = roundPlayed;
        computerScoreArea.textContent = computerScore;
    }

    playGame()
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundPlayed = 0;

    playerScoreArea.textContent = playerScore;
    computerScoreArea.textContent = computerScore;
    roundPlayedArea.textContent = roundPlayed;

}
function playGame(){
    if (playerScore === 5){
        roundResult.textContent = "You won the game!";
        resetGame();
    }
    else if (computerScore === 5){
        roundResult.textContent = "You lose the game!";
        resetGame();
    }
    
}

