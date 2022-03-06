// Please use a for of loop to loop over array numbers, and print out the square of each value
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// first parseInt the String to Number and then with Math.pow method square the result 
for (let number of numbers) {
    console.log(Math.pow(parseInt(number), 2));
}