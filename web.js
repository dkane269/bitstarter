var express = require("express");
var app = express();
var buff = new Buffer(256);

app.get('/', function(request, response) {
// buff = fs.readFileSync("index.html");

response.send('hello'); // buff.toString());

 } );

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
