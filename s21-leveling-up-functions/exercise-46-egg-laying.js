// Define an objeect called hen. It should have three properties:
// - name should be set to "Helen"
// - eggCount should be set to 0
// - layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "Egg" 
// You''ll need to use this

let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount += 1;
        return 'EGG'
    }
}

console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);