const fs = require('fs');

let watched_dir = '../watched_dir';
let log_file = '../logs/log.txt';

fs.watch(watched_dir,function(event,filename){

	if (event == 'change'){
		
		fs.appendFile(log_file, filename + '\n', (err) => {
       		if (err) throw err;

       		console.log('File ' + filename+ ' created!!!')

    	});
	}

});

