var fs = require('fs');
var express = require("express");
var app = express();
var buff = new Buffer(256); 

buff = fs.readFileSync("index.html");
var string = buff.toString();  

app.get('/', function(request, response) {

response.send(string);

 } );

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
