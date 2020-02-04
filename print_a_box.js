// Print a box
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.




// ******
// *    *    **      
//           *    
//           ***
// *    *
// ******

// going off the above example, it seems that the box has to be at least 3 wide and 3 high



function printBox(width, height) {
    let count = 0;
    console.log("*".repeat(width));

    while(count < height -2) {

        console.log("*" + " ".repeat(width -2) + "*")
        count++
    }

    console.log("*".repeat(width));
        

}

printBox(5,3);