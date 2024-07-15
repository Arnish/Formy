/* add a script to only apply the required class to input fields after submit is clicked!
- grab elements (submit button, input types)
- make submit button have an onclick eventlistener
- write function for when clicked apply the class/id containing required (no need to remove it afterwards) 

previous solution: added :focus to the css of input:invalid
better solution: adding a custom function to add an invalid error (note this not make use of any premade selectors)
*/

const inputs = document.querySelectorAll("input"); //grabs and stores all the input related variables
console.log(inputs);

/* learning forEach
//inputs.forEach(input);
function errored() { //adds error class for adding the CSS
    inputs.classList.add("error");
}

//i understand now, adding the event listener itself needs to be used with a for each to access the nodelist from using queryselector!!
//inputs.addEventListener("invalid", inputs.forEach(errored())); //when the submit button formcheck validation finds something invalid it will give an error

inputs.forEach(evented);

function evented() {
    inputs.addEventListener("invalid", errored => { 
        inputs.classList.add("error"); //eventlistener works as an "if" statement
    }
}
*/

/*
//inputs.forEach(elementInput => console.log(elementInput)); 
    -elementInput here is just a variable
    -for each element in inputs
*/

// using forEach 
inputs.forEach(elementInp => {             //for each element in the input nodelist
    elementInp.addEventListener("invalid", //when an element is invalid
    errored => {                           //run the newly created function, errored()
        elementInp.classList.add("error"); //which then adds the class "error" to each element in the nodelist
    });
});


// let nodeArray = Array.from(inputs);
// console.log(nodeArray);

// //inputs.addEventListener("invalid", errors());
// const submitBtn = document.getElementById("submitBtn")
// //submitBtn.addEventListener("onclick", errors);

// function errors() {
//     for (i=0;i<nodeArray.length;i++) {
//         console.log(nodeArray[i].validity.valid);
//         if(nodeArray[i].validity.valid === false) {
//         nodeArray[i].classList.add("error")};
//     };
// };

