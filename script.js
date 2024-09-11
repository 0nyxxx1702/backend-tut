const fs=require('fs');
const http=require('http');

/*
fs.readFile("hello.txt","utf8", function(err, data){
    if(err) console.error(err);
    else console.log(data);
})



const server=http.createServer(function(req,res){
    res.end("HELLO WORLD");
})
server.listen(3000);
*/


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Paaji')
})

app.listen(3000);