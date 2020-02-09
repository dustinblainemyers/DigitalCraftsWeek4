
// 6. Write a JavaScript program to find the most frequent item of an array.

function getMostFrequent(array) {
    let mostFrequent = null;
  let mainCounter = 0;
  let loopCounter = 0;
  for (let loop1 = 0; loop1 <= array.length -1 ; loop1++) {
    for (let loop2 =0; loop2 <= array.length -1; loop2++) {

      if (array[loop1] === array[loop2]) {
        loopCounter++;
        

      }
      if (loopCounter > mainCounter) {

        mainCounter = loopCounter;
        mostFrequent = array[loop1];
      }
     
    }

    loopCounter = 0;

  }

  return mainCounter;
}