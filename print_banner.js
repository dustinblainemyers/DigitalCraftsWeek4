// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

// > printBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************


function printBanner(string) {
    let topBottomStars;
   
    topBottomStars = string.length + 2;

   
    console.log("*".repeat(topBottomStars));
    console.log("*" + string + "*");
    console.log("*".repeat(topBottomStars));

    
}

//below I was trying to figure out how I would do this for a multiline string
// let string1 = "This is the first line This is the second line";
// console.log(string1.split(/.{1,23}(\n|$)/g));


printBanner("This is the string I want to be surrounded by a banner");