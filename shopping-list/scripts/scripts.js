'use strict';

const generateListButton = document.getElementById("generateListButton");
const inputs = document.querySelectorAll('.list-item')
const myListDiv = document.querySelectorAll('#myList');
console.log(inputs);

function generateMyList() {
    const  newText = document.createElement('p');
    newText.innerHTML = 'Hello World';
    myListDiv.forEach(listitem => {
        listitem.appendChild(newText);
    })
    

}

generateListButton.addEventListener('click', function (e) {
    e.preventDefault();

    console.log("you clicked the button");

    
    generateMyList();

})

    


     
    

