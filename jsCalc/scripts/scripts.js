const Display = {

    updateDisplay(inputOutputToParse) {

        
    }

}
 



console.log(document.querySelectorAll("div > .number"));
const calculatorButtons = document.querySelectorAll("div > div");





   calculatorButtons.forEach(button => {

    button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(`you clicked ${button.className}`);
        
    })
   })


  