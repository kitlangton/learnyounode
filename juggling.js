var http = require('http');
var count = 0;

var values = []

function countStreams() {
  count ++;
  if (count == 3) {
    for (var i=0; i < values.length; ++i) {
      console.log(values[i]);
    }
  }
}

function httpGet(index) {
  http.get(process.argv[i], function (response) {
    var all_data = [];
    response.setEncoding('utf8');
    response.on("data", function (data) {
      all_data.push(data);
    });
    response.on("end", function (data) {
      values[index-2] = all_data.join('');
      countStreams();
    });
  });
}

for (var i=2; i < process.argv.length; ++i) {
  httpGet(i);
}
