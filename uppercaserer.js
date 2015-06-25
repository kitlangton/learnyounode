var port = process.argv[2];
var http = require('http');

function sendFile(dst) {
}

var server = http.createServer(function (request, response) {
  if(request.method != "POST") {
    return res.end("send me a POST\n")
  }
  request.on("error", function (err) {
    console.log(err);
  });
  request.on("data", function (data) {
    response.write(data.toString().toUpperCase());
  });
  request.on("end", function (data) {
    response.end();
  });
});

server.listen(port);
