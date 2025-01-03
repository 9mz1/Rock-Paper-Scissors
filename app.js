
let choices = document.querySelector('.choices');
let rounds = document.querySelector('#rounds');


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
                alert('Round Won!');
                humanScore++;
                console.log(`Player: ${humanScore}`);
                console.log(`Computer: ${computerScore}`);
        } else if (humanChoice === computerChoice) {
            alert('TIE!!')
            humanScore++;
            computerScore++;
            console.log(`Player: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
        } else {
            alert('Round Lost'); 
            computerScore++ ;
            console.log(`Player: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
        }
    }

    function scoreCalculate(humanScore, computerScore) {
        if (humanScore > computerScore) {
            // alert('You WON!!');
            console.log('You WON!!');
        } else if (humanScore < computerScore) {
            // alert('You LOST!');
            console.log('You LOST!');
        } else {
            // alert('TIE!!!');
            console.log('TIE!!!');
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
            
            // console.log(`Round ${currentRound}`);
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            // five rounds
            currentRound++;
            if (currentRound > totalRounds) {
                scoreCalculate();
                humanScore = 0;
                computerScore = 0;
                currentRound = 1;
            }
        }
    });
}

playGame();