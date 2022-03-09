// Define a variable named firstNames and assign it to the result of mapping over the existing array
// fullNames, so that firstNames contains only the first names of the HarryPotter characters from the fullNames array

const fullNames = [{ first: 'Albus', last: 'Dumbledore' },
{ first: 'Harry', last: 'Potter' },
{ first: 'Hermione', last: 'Granger' },
{ first: 'Ron', last: 'Weasley' },
{ first: 'Rubeus', last: 'Hagrid' },
{ first: 'Minerva', last: 'McGonagall' },
{ first: 'Severus', last: 'Snape' }];

let firstNames = fullNames.map(function (shortName) {
    return shortName.first;
});
console.log(firstNames)