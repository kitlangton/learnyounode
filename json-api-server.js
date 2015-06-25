var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
  var req_data = url.parse(req.url, true);
  var route = req_data.pathname;
  var query = req_data.query.iso;
  var date = new Date(query);
  if (route === "/api/parsetime") {
    var time = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds(),
    }
    res.end(JSON.stringify(time));
  } else if (route === "/api/unixtime"){
    var time = {
      "unixtime": date.getTime()
    }
    res.end(JSON.stringify(time));
  }
});

server.listen(port);
