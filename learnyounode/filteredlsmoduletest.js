var filterLS = require("./filteredlsmodule.js")


filterLS(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    return console.error(err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})