 module.exports = filter_ls
 
 function filter_ls(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    
    fs.readdir(dir, filter);
    function filter (err, list) {
      if(err) 
        return callback(err);
      else
      {
        callback(null, list.filter(function (argument) {
          return path.extname(argument)==='.'+ext;
        }));
      }
    } 
 }
