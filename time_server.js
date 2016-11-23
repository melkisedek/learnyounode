var net = require('net')
var server = net.createServer(listener);
server.listen(process.argv[2]) 

function listener(socket){
    var date  = new Date();
    var data = '';
    // YYYY-MM-DD hh:mm
    data += date.getFullYear();  
    data += '-'+(date.getMonth()+1);     // starts at 0  
    data += '-'+date.getDate();
    data += ' '+date.getHours();  
    data += ':'+date.getMinutes()+'\n';
    socket.end(data);
    data='';
}