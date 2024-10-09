// declare the coinFlip variable
let coinFlip;

// get user input for number of coin flips
let flips = prompt("How many times would you like to flip the coin?");

// Create a for loop to execute the number of times entered by the user
for (let i = 0; i < flips; i++) {
    
    // Generate a random number between 0 and 1
    coinFlip = Math.floor(Math.random() * 2);

    // Conditional statement to check the result of the coin flip
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}