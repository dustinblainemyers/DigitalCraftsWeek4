// 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each number. 
// ```
// Example: const numbers = 8675309


function numberToDash(number) {

    workingCopy = number.toString();
    workingArray = [];
    for (let count =0; count < workingCopy.length  ; count++) {
  
      workingArray.push(workingCopy[count])
    }
   const newArray = workingArray.map(number => Number(number));
  
   const result = newArray.join("-");
   return result;
  }
  
  console.log(numberToDash(567))