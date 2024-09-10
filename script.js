const fs=require('fs');
const http=require('http');

/*
fs.readFile("hello.txt","utf8", function(err, data){
    if(err) console.error(err);
    else console.log(data);
})

*/

const server=http.createServer(function(req,res){
    res.end("HELLO WORLD");
})
server.listen(3000);

