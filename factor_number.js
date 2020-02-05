// Factor a Number
// Write a function factors which is given a number and returns an array containing all its factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number


function factors(numberToFactor) {
  
    let count = 0;
    const factorArray = []
    while(count <= numberToFactor ) {
      
      if (numberToFactor % count === 0) {
  
        factorArray.push(count);
      }
      count++;
    
      
    }
    return factorArray
  }
  
  factors(84);