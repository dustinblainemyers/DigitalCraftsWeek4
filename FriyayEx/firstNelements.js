// 2. Write a JavaScript function to get the first 'n' elements of an array.

myArray = [1,2,3,"rg",8,10];


function firstNElements(anArray, nElements) {
anArray.splice(nElements);
return anArray
};


firstNElements(myArray,3);

console.log(myArray);