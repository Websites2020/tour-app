var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "toursDB"
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

con.connect(function(err) {

app.post('/insert', function(req, res) {
  // con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var city = req.body.city;
    var country = req.body.country;
    var description = req.body.description;
    var people = req.body.people;
    var date = req.body.date;
    var time = req.body.time;
    var email = req.body.email;
    var budget = req.body.budget;
    var sql = `INSERT INTO tours (city, country, description, people, date, time, email, budget) VALUES ('${city}', '${country}', '${description}', '${people}', '${date}', '${time}', '${email}', '${budget}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  // });
  res.sendfile("public/page1.html");
  app.use(express.static(__dirname + '/public'));
})

app.get('/show',function(req,res){
  // con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM tours ORDER BY id DESC", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  // });
});

});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})