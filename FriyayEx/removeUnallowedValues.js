const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
const cantHave = [null, 0, '""', false, undefined,NaN ];

function arrValue(array) {
  notallowedFlag = false;
  let newArray = array.map(element => {
    for (let loop = 0;loop < cantHave.length -1 && notallowedFlag === false  ; loop++) {
      
      if(cantHave[loop] === element) {

        // return array.splice(array.indexOf(element),1);
        console.log("something wasnt allowd");
        notallowedFlag = true;
      } else {
       console.log(`${element} is allowed`);
        

      
    }

  
  
};
});
};


console.log(arrValue(arr));