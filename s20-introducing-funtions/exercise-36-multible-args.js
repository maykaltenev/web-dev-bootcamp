// Please write a function called isSnakeEyes, which accepts two number as inputs, representing two dice
// If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1, 1);
isSnakeEyes(1, 2);