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