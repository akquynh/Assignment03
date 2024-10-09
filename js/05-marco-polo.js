// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Marco! Polo!");
    }
    // Check if the number is a multiple of 3
    else if (i % 3 === 0) {
        console.log("Marco!");
    }
    // Check if the number is a multiple of 5
    else if (i % 5 === 0) {
        console.log("Polo!");
    }
    // If the number is not a multiple of 3 or 5, print the number
    else {
        console.log(i);
    }
}