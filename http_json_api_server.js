var http = require('http');
var url = require('url');
var server = http.createServer(handler);

function handler(request, response){
    
    var urlobj = url.parse(request.url, true);
    var date = new Date(urlobj.query.iso);
    if(urlobj.pathname == '/api/parsetime'){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            hour : date.getHours(),
            minute : date.getMinutes(),
            second : date.getSeconds()
        }));
    }else if(urlobj.pathname == '/api/unixtime'){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            unixtime : date.getTime()
        }));
    } else{
        response.writeHead(404);
        response.end();
    }
}

server.listen(process.argv[2]); 