'use strict';

const generateShoppingList = document.getElementById("generateShoppingList");
const inputs = document.querySelectorAll('.list-item')

console.log(inputs);


generateShoppingList.addEventListener('click', function (e) {
    e.preventDefault();
    const newDiv = document.createElement("ul"); 
    console.log("you clicked the button");

    inputs.forEach(input => {

       
            const newListItem = document.createElement("li"); 
            // add the text node to the newly created div
            newDiv.appendChild(newListItem);  
          
            var newContent = document.createTextNode("Hi there and greetings!");
            // add the newly created element and its content into the DOM 
            const currentDiv = document.getElementById("separator"); 
            document.body.insertAfter(newDiv, currentDiv); 
          }
        console.log(`This inputs value is ${input.value}`)
    })

})

    


     
    

