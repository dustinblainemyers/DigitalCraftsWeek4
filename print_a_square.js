// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(squareSize) {

    let count = 0;
    while(count < squareSize) {

        console.log("*".repeat(squareSize));
        count++;
    }

}

printSquare(5);