const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let fullAddress = restaurant["name"] + ", " +
    restaurant["address"] + ", " +
    restaurant["city"] + ", " +
    restaurant["state"] + ", " +
    restaurant["zipcode"];

console.log(fullAddress)

const comments = [
    { username: "Tammy", text: "lololo", votes: 9 },
    { username: "Fish", text: "glub glub", votes: 41241 },
]