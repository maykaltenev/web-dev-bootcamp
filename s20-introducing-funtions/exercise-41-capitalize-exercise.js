// define function called capitalize that accepts a
//  string arguments and return a new string with the first letter capitalized

function capitalize(input) {
    let firstLetter = input[0].toUpperCase();
    let rest = input.slice(1);
    let result = firstLetter + rest;
    return result;

}
console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));