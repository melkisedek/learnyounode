var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.'+process.argv[3];

function callback (err, list) {
  if(err){
    console.log('error');
  }
  else
  {
    list.filter(function (argument) {
      if(path.extname(argument)===ext) 
        console.log(argument);
    });
  }
} 
fs.readdir(dir, callback);