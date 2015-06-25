var port = process.argv[2];
var net = require('net');

function callback(socket) {
  var date = new Date();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day= ("0" + date.getDate()).slice(-2);
  var hours= ("0" + date.getHours()).slice(-2);
  var minutes= ("0" + date.getMinutes()).slice(-2);
  var text = date.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes+"\n";
  socket.write(text);
  socket.end();
}

var server = net.createServer(callback);

server.listen(port);
