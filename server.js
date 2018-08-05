var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();



app.get('/',function(req,res){
  res.sendfile("public/index.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page1', function (req, res) {
  res.sendfile("public/page1.html");
  app.use(express.static(__dirname + '/public'));
})

app.get('/page2', function (req, res) {
  res.sendfile("public/page2.html");
  app.use(express.static(__dirname + '/public'));
})

app.get('/page3',function(req,res){
  res.sendfile("public/page3.html");
  app.use(express.static(__dirname + '/public'));
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})