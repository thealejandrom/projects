let playerSelection = prompt("Enter your choice");
let computerSelection = getComputerChoice();
let result;
let roundCount = 0;
let playerWonCount = 0;
let computerWonCount = 0;


// This will control each round interation
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // Result: Draw
        result = "It's a draw!";

        roundCount++;
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // Result: Computer wins
        result = `Computer won this round! ${computerSelection} beats ${playerSelection}`;

        roundCount++;
        computerWonCount++;
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        // Result: Player wins
        result = `You won this round! ${playerSelection} beats ${computerSelection}`;

        roundCount++;
        playerWonCount++;
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        // Result: Player wins
        result = `You won this round! ${playerSelection} beats ${computerSelection}`;

        roundCount++;
        playerWonCount++;
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        // Result: Computer wins
        result = `Computer won this round! ${computerSelection} beats ${playerSelection}`;

        roundCount++;
        computerWonCount++;
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        // Result: User wins
        result = `You won this round! ${playerSelection} beats ${computerSelection}`;

        roundCount++;
        playerWonCount++;
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        // Result: Computer wins
        result = `Computer won this round! ${computerSelection} beats ${playerSelection}`;

        roundCount++;
        computerWonCount++;
        return result;
    } else {
        console.log("An error has occured...");
        return 0;
    }
}

// This will generate a random computer selection of "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    // Declaring our options
    const options = {
        1: "Rock",
        2: "Paper",
        3: "Scissors",
    };
    // Generate the random number between 1 - 3 and rounding to get a whole number
    let choice = Math.floor(Math.random() * 3 + 1);
    // Assign the selection as a string from our list of options
    if (choice == 1) {
        choice = options[1];
    } else if (choice == 2) {
        choice = options[2];
    } else if (choice == 3) {
        choice = options[3];
    } else {
        console.error("Game broke...");
    }
    // returning the result
    return choice;
}