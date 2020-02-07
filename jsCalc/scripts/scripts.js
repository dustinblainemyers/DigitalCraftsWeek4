const displayArray = [];

const numbers = document.querySelectorAll("div > .number");

let displayOutput = document.getElementById('display')
let stringToDisplay = ""

function updateDisplayArray(value) {

    displayArray.push(value.innerText)
    stringToDisplay = arrayToString(displayArray);
    displayOutput.innerHTML = stringToDisplay;

};

numbers.forEach(number => {

 number.addEventListener('click', function (e) {
     e.preventDefault();
     if(displayArray.length < 12) {
     updateDisplayArray(number);
     }
 })
})

operations.forEach(operation => {

    operation.addEventListener('click', function (e) {
        e.preventDefault();
        if(displayArray.length < 12) {
        updateDisplayArray(number);
        }
    })
   })


function arrayToString(array) {
    let convertedString = "";
    array.forEach(item => {
        convertedString += item;

    })
    return convertedString;
}

  