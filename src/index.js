const fs = require('fs')

// Get data from file
let rawData = fs.readFileSync('test.json')
let jsonData = JSON.parse(rawData)

console.log(jsonData)

// Write data to file
let output = JSON.stringify(jsonData)
fs.writeFileSync('output.json', output)
