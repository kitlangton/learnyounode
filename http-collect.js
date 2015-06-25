var url = process.argv[2];
var http = require('http');

http.get(url, function (response) {
  var all_data = [];
  response.setEncoding('utf8');
  response.on("data", function (data) {
    all_data.push(data);
  });
  response.on("end", function (data) {
    console.log(all_data.join("").length);
    console.log(all_data.join(""));
  });
});
