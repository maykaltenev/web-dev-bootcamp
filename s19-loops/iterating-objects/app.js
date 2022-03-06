const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================
// for in used to interred over object, will return the key
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
// Special methods Object.keys, Object.values and Object.entries which returns arrays
console.log(Object.keys(testScores));
console.log(Object.values(testScores));
console.log(Object.entries(testScores));

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

