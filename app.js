// rock(0) defeats scissors(2) scissors(2) defeats paper(1) paper(1) defeats rock(2)


// get computer choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// get human choice
function getHumanChoice() {
    let humanChoice = prompt('Rock | Paper | Scissors').toLowerCase();
    if (humanChoice == 'rock') {
        return 0;
    } else if (humanChoice == 'paper') {
        return 1;
    } else if (humanChoice == 'scissor') {
        return 2;
    } else {
        alert('WRONG INPUT!')
    }

    // console.log(`Rock | Paper | Scissor: ${humanChoice}`);
}

// Game Logic
function playGame() {
    //Score
    let humanScore = 0;
    let computerScore = 0;

    //Game Function
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 0 && computerChoice == 2) {
            alert('Round Won!');
            humanScore++;
            console.log(`Player: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (humanChoice == 2 && computerChoice == 1) {
            alert('Round Won!');
            humanScore++;
            console.log(`Player: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (humanChoice == 1 && computerChoice == 0) {
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

    for (x = 0; x < 5; x++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    scoreCalculate(humanScore, computerScore)
}

playGame();