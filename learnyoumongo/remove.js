const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/' + process.argv[2]
const collectionName = process.argv[3]
const id = process.argv[4]

mongo.connect(url, (err, db) =>{
	var collection = db.collection(collectionName)

	collection.remove({
    _id: id
  },(err) => {
   	 	if (err) throw err
        
        
    	db.close()
    })


  })

