// Define an object called square ,
// which will hold methods that have to do with the geometry of squares. It should contain two methods:
// - area should accept the length(all sides are the same in square) amd then return the side squared
// - parameter should accept the length of a side and return that multiplied by 4

const square = {
    area: function (x) {
        return x * x;
    },
    perimeter: function (x) {
        return 4 * x;
    }
}

console.log(square.area(10))
console.log(square.parimeter(10))