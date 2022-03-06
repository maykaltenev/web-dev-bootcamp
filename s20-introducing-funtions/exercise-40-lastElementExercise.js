
// the function should return the last element of the array without removing the element.
// If the array is empty the function should return null
function lastElement(args) {
    if (args == null || args.length == 0) {
        return null;
    } else {
        return args[args.length - 1];
    }
}




console.log(lastElement([1, 2, 3]));
console.log(lastElement([]));