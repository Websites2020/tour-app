var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var con = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: "ebdb"
});

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
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

app.get('/page4', function(req,res) {
  res.sendfile("public/page4.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page5', function(req,res) {
  res.sendfile("public/page5.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page6', function(req,res) {
  res.sendfile("public/page6.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page7', function(req,res) {
  res.sendfile("public/page7.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page8', function(req,res) {
  res.sendfile("public/page8.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page9', function(req,res) {
  res.sendfile("public/page9.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page10', function(req,res) {
  res.sendfile("public/page10.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page11', function(req,res) {
  res.sendfile("public/page11.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/page12', function(req,res) {
  res.sendfile("public/page12.html");
  app.use(express.static(__dirname + '/public'));
});

app.get('/test',function(req,res){
  res.sendfile("public/test.html");
  app.use(express.static(__dirname + '/public'));
});

con.connect(function(err) {

app.post('/insert', function(req, res) {
    if (err) throw err;
    // console.log("Connected!");
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
      // console.log("1 record inserted");
    });
  res.sendfile("public/index.html");
  app.use(express.static(__dirname + '/public'));
})

app.get('/show',function(req,res){
    if (err) throw err;
    con.query("SELECT * FROM tours ORDER BY tourID DESC", function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
});

app.post('/addTourist', function(req,res) {
  if (err) throw err;
  // console.log(req.body);
    var usrName = req.body.usrName;
    var usrEmail = req.body.usrEmail;
    var usrPass = req.body.usrPass;
    var sql2 = `INSERT IGNORE INTO tourists (username, email, password) VALUES ('${usrName}', '${usrEmail}', '${usrPass}')`;
    con.query(sql2, function (err, result) {
      // if (err) throw err;
      // console.log(result)
      res.json(result)
    });
    // res.sendfile("public/index.html");
    // app.use(express.static(__dirname + '/public'));
})

app.post('/addLocal', function(req,res) {
  if (err) throw err;
  // console.log(req.body);
    var usrName = req.body.usrName;
    var usrEmail = req.body.usrEmail;
    var usrPass = req.body.usrPass;
    var sql3 = `INSERT IGNORE INTO locals (username, email, password) VALUES ('${usrName}', '${usrEmail}', '${usrPass}')`;
    con.query(sql3, function (err, result) {
      // if (err) throw err;
      // console.log(result)
      res.json(result)
    });
    // res.sendfile("public/index.html");
    // app.use(express.static(__dirname + '/public'));
})

app.post('/torLogin', function(req, res) {
  if (err) throw err;
  // console.log(req.body);
    var adr = req.body.usrName
    var sql = `SELECT * FROM tourists WHERE username = ?`;
    con.query(sql, [adr], function (err, result) {
    if (err) throw err;
      // console.log(result);
      res.json(result);
  });
})

app.post('/locLogin', function(req, res) {
  if (err) throw err;
  // console.log(req.body);
    var adr = req.body.usrName
    var sql = `SELECT * FROM locals WHERE username = ?`;
    con.query(sql, [adr], function (err, result) {
    if (err) throw err;
      // console.log(result);
      res.json(result);
  });
})

app.post('/matchTourist', function(req, res) {
  if (err) throw err;
  // console.log(req.body);
    var usr = req.body.usrName
    var pass = req.body.usrPass
    var sql = `SELECT * FROM tourists WHERE username = "${usr}" AND password = "${pass}"`;
    con.query(sql, function (err, result) {
    if (err) throw err;
      // console.log(result);
      res.json(result);
  });
})

app.post('/insertAcc', function(req, res) {
  if (err) throw err;
  // console.log("Connected!");
  var city = req.body.city;
  var country = req.body.country;
  var description = req.body.description;
  var people = req.body.people;
  var date = req.body.date;
  var time = req.body.time;
  var email = req.body.email;
  var budget = req.body.budget;
  var user = req.body.user;
  var sql = `INSERT INTO tours (city, country, description, people, date, time, email, budget, userID) VALUES ('${city}', '${country}', '${description}', '${people}', '${date}', '${time}', '${email}', '${budget}',(SELECT userID from tourists where username = '${user}'))`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("1 record inserted");
  });
  res.sendfile("public/index.html");
  app.use(express.static(__dirname + '/public'));
})

app.post('/showTAcc',function(req,res){
  if (err) throw err;
  var usr = req.body.usrID
  con.query(`SELECT * FROM tours WHERE userID = "${usr}" ORDER BY tourID DESC`, function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.json(result);
  });
});

app.post('/deleteListing',function(req,res){
  if (err) throw err;
  var tourID = req.body.tourID
  con.query(`DELETE FROM tours WHERE tourID='${tourID}';`, function (err, result) {
    if (err) throw err;
    // console.log("Number of records deleted: " + result.affectedRows);
    res.json(result);
  });
});

}); //end con.connect

// app.listen(3000)
app.listen(port, function(){
  console.log("Started on PORT 8080");
})