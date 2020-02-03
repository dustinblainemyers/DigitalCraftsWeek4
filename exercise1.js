const  myName = prompt("What is your name") || "Hello World"
function greeting(name) {
  
  console.log(`Hello ${name}`);
}

greeting(myName)



// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// Example:

// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'

function madLib(name,subject) {

  

    return console.log(`${name}'s favorite subject in school is ${subject}`)
  }
  
  
  name = prompt("What is your name ? ")
  subject = prompt("What is your favorite subject  ")
  madLib(name,subject);


//   Tip Calculator 

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%

const totalBill = 20
const service = "good" 

function tipCalc(billAmount, serviceLevel) {
  let total = 0

  if (serviceLevel === 'bad'){
    total = (total * 1.1)
  }else if (serviceLevel === 'fair') {
    total = (billAmount * 1.15)
  }
  else if (serviceLevel === 'good'){
    total = (billAmount * 1.2)
  }
  return ("Total bill is " + (total))
}
console.log(tipCalc(totalBill,service))



//tip calculator 2 

let billAmount = prompt("How much was the bill?");
let tipAmount = prompt("How was your service?");
let groupAmount = prompt("Split how many ways?");
function totalAmount(tip,bill,group) {
    switch (tip) {
        case "good":
            console.log(((.2 * bill) + Number(bill))/group)
            break
        case "fair":
            console.log(((.15 * bill) + Number(bill))/group)
            break
        case "bad":
            console.log(((.1 * bill) + Number(bill))/group)
            break
    }
}
totalAmount(tipAmount,billAmount,groupAmount)
