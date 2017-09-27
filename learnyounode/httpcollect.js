const Http = require('http')
const url =  process.argv[2]
const bl = require('bl')


Http.get(url,(response)=>{
	response.pipe(bl((err, data) => {
	    if (err) {
	      return console.error(err)
	    }

	    data = data.toString()
	    console.log(data.length)
	    console.log(data)
	}))
})	