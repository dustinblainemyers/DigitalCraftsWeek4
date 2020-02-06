const displayArray = [];
 



console.log(document.querySelectorAll("div > .number"));
const numbers = document.querySelectorAll("div > .number");
const displayOutput = document.getElementById('display')




   numbers.forEach(number => {

    number.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(`you clicked ${number.innerText}`);
        
    })
   })


  