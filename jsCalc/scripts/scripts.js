
'use strict';

const input = document.querySelector('.container > .display'), // input/output button
  numbers = document.querySelectorAll('.container > .number'), // number buttons
  operators = document.querySelectorAll('.container > .operator'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('.clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed


numbers.forEach(number => {

 number.addEventListener('click', function (e) {
     e.preventDefault();
     if(input.length < 12) {
     updateDisplayArray(number);
     }
 })
})



// const displayArray = [];

// const numbers = document.querySelectorAll("div > .number");

// let displayOutput = document.getElementById('display')
// let stringToDisplay = ""

// function updateDisplayArray(value) {

//     displayArray.push(value.innerText)
//     stringToDisplay = arrayToString(displayArray);
//     displayOutput.innerHTML = stringToDisplay;

// };



// operations.forEach(operation => {

//     operation.addEventListener('click', function (e) {
//         e.preventDefault();
//         if(displayArray.length < 12) {
//         updateDisplayArray(number);
//         }
//     })
//    })


// function arrayToString(array) {
//     let convertedString = "";
//     array.forEach(item => {
//         convertedString += item;

//     })
//     return convertedString;
// }

 