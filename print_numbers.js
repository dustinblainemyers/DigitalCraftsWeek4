// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumbers(startNumber,endNumber) {

    count = startNumber
    while(count <= endNumber) {

        console.log(count);
        count++
    }
}


printNumbers(1,10);