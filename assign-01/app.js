const http = require('http')
const fs = require('fs')




http.createServer((req, res) => {
  if (req.url === '/') {

    fs.truncateSync('./build/index.html',0)

    var data = fs.readFileSync('./templates/index_h.html', 'utf8')

    fs.appendFileSync('./build/index.html',data)

    var files = fs.readdirSync('./posts')
    
    for(var i in files){
        
        data = fs.readFileSync('./templates/post_h.html', 'utf8')
        fs.appendFileSync('./build/index.html',data)
        
        data = fs.readFileSync('./posts/'+ files[i], 'utf8')        
        fs.appendFileSync('./build/index.html',data)

        data = fs.readFileSync('./templates/post_f.html', 'utf8')
        fs.appendFileSync('./build/index.html',data)
  
        
    }


    data = fs.readFileSync('./templates/index_f.html', 'utf8')

    fs.appendFileSync('./build/index.html',data)
    
    
    fs.readFile('./build/index.html', 'utf8', (err, data) => {
      if (err) console.error(err)
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.end(data)
     }) 
  }

  else
  {
  	res.writeHead(404,{'Content-Type': 'text/html'})
  	res.end("Page not Found!!!")
  }
}).listen(3000)