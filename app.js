
const choices = document.querySelector('.choices');
const rounds = document.querySelector('#rounds');
const gameInfo = document.querySelector('#gameInfo');
const scores = document.querySelector('#scores');
const winnerInfo = document.querySelector('#winnerInfo');


// get computer choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Game Logic
function playGame() {
    //Score
    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 1;
    let totalRounds = 5;

    //Game Function
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 0 && computerChoice == 2 ||
            humanChoice == 2 && computerChoice == 1 ||
            humanChoice == 3 && computerChoice == 0) {
                gameInfo.textContent = `You beat the Computer, You Win!!`;
                humanScore++;
                scores.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        } else if (humanChoice === computerChoice) {
            gameInfo.textContent = 'Both put the same choice, TIE!!';
            scores.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            gameInfo.textContent = `The Computer beat You, You Lose!!`; 
            computerScore++ ;
            scores.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        }
    }

    function scoreCalculate(humanScore, computerScore) {
        if (humanScore > computerScore) {
            winnerInfo.textContent = 'YOU WIN!!!';
        } else if (humanScore < computerScore) {
            winnerInfo.textContent = 'YOU LOSE!!!';
        } else if (humanScore === computerScore) {
            winnerInfo.textContent = 'TIE!!!';
        } else {
            alert('Error');
        }
    }

    // player choice

    choices.addEventListener('click', (event) => {
        const target = event.target;

        let humanChoice;
        if (target.id === 'rock') humanChoice = 0;
        else if (target.id === 'paper') humanChoice = 1;
        else if (target.id === 'scissor') humanChoice = 2;

        if (humanChoice !== undefined) {
            rounds.textContent = `Round: ${currentRound}`;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            // five rounds
            currentRound++;
            if (currentRound > totalRounds) {
                scoreCalculate();
                humanScore = 0;
                computerScore = 0;
                currentRound = 1;
                // winnerInfo.textContent = '';
            }
        }
    });
}

playGame();