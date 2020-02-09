// 8. Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops. 

// need to come back to this one.  I think that I am getting the value of loop2 at the wrong time, it is looking at the value of
// the last loop, not the next.

const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7],[1,1,1,1,1]];


function joinArrays(nestedArrays) {

  joinedArrays = []
  for (let loop1 = 0;loop1 < nestedArrays.length   ; loop1++) {
    
    for (let loop2 = 0 ;loop2 < nestedArrays[loop2].length  ; loop2++) {
      
       joinedArrays.push((nestedArrays[loop1][loop2]));
    

    }
    


  }
return joinedArrays;
  
}
  

joinArrays(arr);