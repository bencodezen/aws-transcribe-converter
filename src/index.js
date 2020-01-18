const fs = require('fs')

// Get data from file
let rawData = fs.readFileSync('test.json')
let jsonData = JSON.parse(rawData)

console.log(jsonData)
