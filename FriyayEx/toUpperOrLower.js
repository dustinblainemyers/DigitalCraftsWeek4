// 7. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input `The Quick Brown Fox` the output should be `tHE qUICK bROWN fOX`.

function crazyCase(myString) {
    workingArray = [];
    myString.split('').map(char => {
      
      if (char === char.toUpperCase()) {
        char = char.toLowerCase();
      } else {
        char = char.toUpperCase();
      }
      workingArray.push(char);
    })
    return workingArray.join('');
    
  };
  
  
  console.log(crazyCase("This is a test of Dustin's crazy CASE"));