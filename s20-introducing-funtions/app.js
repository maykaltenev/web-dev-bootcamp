// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    // return capture the result of the function can be only a single value, Object, array, string.
    return x + y;
}



let die1 = Math.floor((Math.random() * 6) + 1);
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

