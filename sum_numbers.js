// Sum the numbers
// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

// > sumNumbers([1, 4, 8])
// 13

function sumNumbers(arrayNumbers) {
    let sumOfNumbers = 0;
    for (let count = 0; count < arrayNumbers.length -1  ; count ++) {

        sumOfNumbers = sumOfNumbers + arrayNumbers[count];
    }
    return sumOfNumbers;
}


console.log(sumNumbers([5,4]))