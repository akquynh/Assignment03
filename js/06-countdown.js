// Prompt the user to enter a number
let number = prompt("Enter a number to count down from:");

// Convert the user input to an integer
number = parseInt(number);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Loop to count down from the entered number to 0
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Please enter a valid number.");
}