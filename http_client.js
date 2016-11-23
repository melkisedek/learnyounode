var http = require('http');
http.get(process.argv[2],function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        console.log(data);
    }  );
    
    response.on('error', function (error) {
        console.error('erro:');
    }  );
    
    // response.on('end', function (end) {
    //     console.error('End of Transmission');
    // }  );
});
