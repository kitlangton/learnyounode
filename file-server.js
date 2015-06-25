var port = process.argv[2];
var file = process.argv[3];
var http = require('http');
var fs = require('fs');

function sendFile(dst) {
  var src = fs.createReadStream(file);
  src.pipe(dst);
}

var server = http.createServer(function (request, response) {
  sendFile(response);
});

server.listen(port);
