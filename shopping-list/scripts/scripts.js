'use strict';

const generateShoppingList = document.getElementById("generateShoppingList");
const inputs = document.querySelectorAll('.list-item')

console.log(inputs);


generateShoppingList.addEventListener('click', function (e) {
    e.preventDefault();
    const newDiv = document.createElement("ul"); 
    console.log("you clicked the button");

    inputs.forEach(input => {

        function addElement () { 
            // create a new div element 
            
            // and give it some content 
            const newContent = document.createTextNode("Hi there and greetings!"); 
            // add the text node to the newly created div
            newDiv.appendChild(newContent);  
          
            // add the newly created element and its content into the DOM 
            var currentDiv = document.getElementById("div1"); 
            document.body.insertBefore(newDiv, currentDiv); 
          }
        console.log(`This inputs value is ${input.value}`)
    })

})

    


     
    

