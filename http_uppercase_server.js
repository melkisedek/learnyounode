var http = require('http');
var server = http.createServer(transform);

function transform(request, response){
    // option 1
    if(request.method == 'POST'){
    var map = require('through2-map');  
    request.pipe(map(function (chunk) {  
        return chunk.toString().toUpperCase().split('').join('');  
    })).pipe(response); 

        // //option 2
        // // npm install concat-stream
        // var concat = require('concat-stream');
        // request.pipe(concat(function (body) {
        //     return JSON.parse(body).toUpperCase().pipe(response);
        // }));
    } else{
        "Must be a POST request!".pipe(response);
    }
}

server.listen(process.argv[2]); 