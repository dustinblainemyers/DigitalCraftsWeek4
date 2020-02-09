// 5. Write a JavaScript program to sort the items of an array.


function sortItems(array) {
    // I don't want the .sort method to mutate original array, so I give the function a new , identical , array to use.
    const completeSort = array;
    return completeSort.sort()
  };
  
  sortItems(["apples","pear","bannana","peach",1,2,"punch","kick","sidestep"]);