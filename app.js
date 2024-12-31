// rock defeats scissors scissors defeats paper paper defeats rock



//Score
let humanScore = 0;
let computerScore = 0;


// get computer choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// get human choice
function getHumanChoice() {
    let humanChoice = prompt('Rock | Paper | Scissors').toLowerCase();
    if (humanChoice == 'rock') {
        humanChoice = 0;
    } else if (humanChoice == 'paper') {
        humanChoice = 1;
    } else if (humanChoice == 'scissor') {
        humanChoice = 2;
    } else {
        alert('WRONG INPUT!')
    }

    // console.log(`Rock | Paper | Scissor: ${humanChoice}`);
}


// Game Logic
