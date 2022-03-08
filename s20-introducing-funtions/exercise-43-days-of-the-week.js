// Write function takes in one parameter(a number from 1 - 7)
// and returns the day of the week(1 is Monday, 2 is Tuesday, etc.)
//  If the number is less than 1 or greater than 7, the function should return null.

function returnDay(number) {
    let daysOfTheWeek = [
        null,
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    for (let i = 0; i <= daysOfTheWeek.length; i++) {
        if (number === i) {
            return daysOfTheWeek[number];
        } else if ((number <= 0) || (number > 7)) {
            return null;
        }
    }
}
console.log(returnDay(0));
console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));
console.log(returnDay(8));
