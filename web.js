var express = require("express");
var app = express();

app.get('/', function(request, response) {

var buff = new Buffer(256);
buff = fs.readFileSync("index.html");

response.send(buff.toString());

 } );

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
