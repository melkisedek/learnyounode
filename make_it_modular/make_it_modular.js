var mymodule = require('./filter_ls_module.js');
var dir = process.argv[2];
var ext = process.argv[3];

function callback (err, list) {
  if(err){
    return console.error('error:', err);
  }
  else
  {
      list.forEach(function(item) {
        console.log(item);
      })
    
  }
}

mymodule(dir, ext, callback);