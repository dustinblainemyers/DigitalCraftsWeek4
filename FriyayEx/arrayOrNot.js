// 1. Write a JavaScript function to check whether an `input` is an array or not.

1. Write a JavaScript function to check whether an `input` is an array or not.

function arrayOrNot(input) {

    if(Array.isArray(input)) {
      return "Yes, that data you asked about IS an array!"
    } else {
  
      return "No, that data you asked about IS NOT an array!"
    }
  }
  
  arrayOrNot([{},{}]);