var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "listDB"
});

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

app.get('/page3', function(req,res) {
  res.sendfile("public/page3.html");
  app.use(express.static(__dirname + '/public'));
});

app.post('/insert', function(req, res) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO tours (name, address, one, one, one, one, one) VALUES (${req.body.one}, ${req.body.one}, ${req.body.one}, ${req.body.one}, ${req.body.one}, ${req.body.one}, ${req.body.one},)`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
})

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})