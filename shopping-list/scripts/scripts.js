'use strict';

const generateShoppingList = document.getElementById("generateShoppingList");
const inputs = document.querySelectorAll('.list-item')

console.log(inputs);


generateShoppingList.addEventListener('click', function (e) {
    e.preventDefault();

    console.log("you clicked the button");

    inputs.forEach(input => {
        console.log(`This inputs value is ${input.value}`)
    })

})

    


     
    

