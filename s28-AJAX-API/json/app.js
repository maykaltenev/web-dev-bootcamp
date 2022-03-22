//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// THIS IS A JS OBJECT
const parsedData = JSON.parse(data);

// Object to JSON String
// This data is now readable from other programming languages, example: Python, Ruby and etc. There should be parsed to the native language
const dog = { breed: 'lab', color: 'black', isALive: true, owner: undefined }
let dogJsonString = JSON.stringify(dog)
console.log(JSON.stringify(dogJsonString));

let priceFromParsedData = parsedData.ticker.price;
console.log(priceFromParsedData)

// XML is not used, AJAX stands for:
// Asynchronous
// JavaScript
// And
// XML (where everybody are referring nowadays to JSON) //AJAJ

// queryString
// ?sort=desc&color=blue