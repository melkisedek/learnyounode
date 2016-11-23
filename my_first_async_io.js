var fs = require('fs');
var file = process.argv[2];
function callback (err, data) {
  if(err){
    console.log('error');
  }
  else{
    console.log(data.split('\n').length -1);
  }
} 
fs.readFile(file, 'utf8', callback);