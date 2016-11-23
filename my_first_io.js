var fs = require('fs');
var file = process.argv[2];
var arr = fs.readFileSync(file).toString().split('\n');
console.log(arr.length-1);