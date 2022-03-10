// Define a function called allEvens accepts a single array of numbers.
//  If array contain all even numbers return true, else false

// returns boolean (true or false)
let exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
let e = [4];

// the function get an array
function allEvens(input) {
    // define an variable result to hold the result of the method every on the array("input"), 
    // where num is defined and represent every number in the array, 
    // where each number is modulo divided and checked 
    // if there is a remainder, if exactly equal to zero there, the number is even
    let result = input.every(num => num % 2 === 0);
    // grabbing and returning the result to the function allEvents
    return result;
}

// false
console.log(allEvens([80, 98, 92, 78, 77, 90, 89, 84, 81, 77]));
// true
console.log(allEvens([4]));
// true
console.log(allEvens([e]));
// false
console.log(allEvens([exams]));

// approach with arrow functions
let allEvens = arr => {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}
// using implicit return
let allEvents = arr => arr.every(num => num % 2 === 0);