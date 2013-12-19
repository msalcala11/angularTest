var express = require('express');
var pg = require('pg');
var fs = require('fs');

//lets connect to local postgres database
//format of conString = "postgres://user:password@host:port/dbname";
//format of .pgpass localhost:port:databaseName:user:password

var PGPASS_FILE = '.pgpass';
var pgtokens = fs.readFileSync(PGPASS_FILE).toString().split(':');
var host = pgtokens[0];
var port = pgtokens[1];
var dbname = pgtokens[2];
var user = pgtokens[3];
var password = pgtokens[4];
var conString = "postgres://" + user + ":" + password  + "@" + host + ":" + port + "/" + dbname;

var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});

var app = express();
app.use(express.static(process.env.PWD + '/'));

app.get('/', function(request, response) {
  var fs = require("fs");
  var buffer = new Buffer(fs.readFileSync("index.html"));
  var indexStr = buffer.toString("utf-8",0,buffer.length);
  response.send(indexStr);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
