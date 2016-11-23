var http = require('http');
var fs = require('fs');
var server = http.createServer(serve_file);

function serve_file(request, response){
    //response.writeHead(200, { 'content-type': 'text/plain' });
    var src_file = fs.createReadStream(process.argv[3]);
    src_file.pipe(response);
}

server.listen(process.argv[2]); 