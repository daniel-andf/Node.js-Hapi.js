let fs = require('fs')
let path = require('path')


module.exports = (files,ext,callback) => {

	fs.readdir(files,(err,list) =>{

			if (err) return callback(err)

 			list = list.filter(function (file) {
     			 return path.extname(file) === '.' + ext
   			 })

 			return callback(null,list)

 	})
}

