const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
var firstName = process.argv[2]
var lastName = process.argv[3]

var jsonData = {
      firstName: firstName,
      lastName: lastName
    }

mongo.connect(url, (err, db) =>{
	var collection = db.collection('docs')

	collection.insert(jsonData,(err, data) => {
   	 	if (err) throw err
        
        console.log(JSON.stringify(jsonData))
    	db.close()
    })


  })

