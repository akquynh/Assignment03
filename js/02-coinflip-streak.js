// Declare the coinFlip variable
let coinFlip;

// Initialize a counter for the streak of Heads
let headsStreak = 0;

// Create a do while loop
do {
    // Generate a random number between 0 and 1
    coinFlip = Math.floor(Math.random() * 2);

    // Conditional statement to check the result of the coin flip
    if (coinFlip === 0) {
        console.log("Heads");
        headsStreak++;  // Increment the Heads streak counter
    } else {
        console.log("Tails");
    }
    
} while (coinFlip === 0);  // Loop ends when a Tails (coinFlip === 1) is flipped

// Output the total number of Heads in a row
console.log("Streak of Heads: " + headsStreak);