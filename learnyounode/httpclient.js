const Http = require('http')
const url =  process.argv[2]


Http.get(url,(response,err)=>{
	if (err) {
    	throw err;
  	}

  	response.setEncoding('utf8')
  	response.on('data', console.log)
  	response.on('error', console.error)
})