function getComputerChoice(){
    let randomComputerChoice = Math.floor(Math.random()*3);
    if (randomComputerChoice === 0){
        return "rock";
    
    } else if (randomComputerChoice === 1){
        return "paper";

    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    let humanChoice;
    const validChoice = ["rock", "paper", "scissors"];
    while (!validChoice.includes(humanChoice)){
        humanChoice = prompt("Please choose between rock, paper, and scissors : ");
        humanChoice = humanChoice.toLowerCase();
        if (!validChoice.includes(humanChoice)){
            alert("Bad choice, please choose a valid option.")
        }

    }

    return humanChoice;
}


function PlayGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        
        if (humanChoice === computerChoice){
            alert("It's a tie!");
    
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            alert("You Won! Rock beats Scissors");
            humanScore++ ;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            alert("You Won! Paper beats Rock");
            humanScore++ ;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            alert("You Won! Scissors beats Paper");
            humanScore++;
        } else {
            alert(`You loose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);

    }
    if (humanScore > computerScore){
        alert(`You Won the Game! | your score : ${humanScore} vs computerScore : ${computerScore}`);

    } else if (humanScore < computerScore){
        alert(`You Loose the Game! | your score : ${humanScore} vs computerScore : ${computerScore}`);
        

    } else {
        alert(`It's a Draw! | your score : ${humanScore} vs computerScore : ${computerScore}`);

    }
}

PlayGame();