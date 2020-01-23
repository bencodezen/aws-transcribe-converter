const fs = require('fs')

// Declare final output
const output = {
  transcript: []
}

// Get data from file
const rawData = fs.readFileSync('testAsrOutput.json')
const jsonData = JSON.parse(rawData)

// Get metadata
const items = jsonData.results.items
const segments = jsonData.results.speaker_labels.segments

// TODO: Loop through ever segment to generate time stamps and speaker
segments.forEach(segment => {
  output.transcript.push({
    startTime: segment.start_time,
    endTime: segment.end_time,
    speaker: segment.speaker_label
  })
})

// TODO: Loop through items to generate lines
output.transcript.forEach(block => {
  // If start time matches item in transcript
  // Start adding content into line property
  // If end time matches item, prepare to end line generation
  // If punctuation, add to current block
  // Otherwise,
})

// Write data to file
let outputString = JSON.stringify(output)
fs.writeFileSync('output.json', outputString)
