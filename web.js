var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send("foo");
    /*
    fs.readFile("index.html", 'utf8', function(err, data) {
	response.send(data);
    });
    */
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});