
// 3. Write a simple JavaScript program to join all elements of the following array into a string. 

function elementsToString(anArray) {

    const myString = anArray.join(' ');
    return myString;
  };
  
  console.log(elementsToString(['bob','had','a','baby','its','a','boy']));