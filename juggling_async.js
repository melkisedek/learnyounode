var http = require('http');
var count =0;
var ans=[];
function http_get(url, index){
    var result = '';
    http.get(url, function(response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
           result  += data;
        }  );
        
        response.on('end', function (end) {
            ans[index-2]=result;
            count++;
            if(count === process.argv.length-2){
                show_result();
            }
            result='';
        });
        
        response.on('error', function (end) {
            console.error('error:');
            result='';
        });
    });
}

function show_result(){
    for(var i=0; i<ans.length;i++){
        console.log(ans[i]);
    }
}

for(var i=2; i<process.argv.length;i++){
    http_get(process.argv[i], i);
}
