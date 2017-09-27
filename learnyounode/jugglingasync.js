const Http = require('http')
const bl = require('bl')
var output = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(output[i])
  }
}

function getURL(index) {
  Http.get(process.argv[2 + index],  (response) => {
    response.pipe(bl( (err, data) => {
      if (err) {
        return console.error(err)
      }

      output[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  getURL(i)
}