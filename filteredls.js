var dir = process.argv[2];
var filter = process.argv[3];

var fs = require('fs');
var path = require('path');

fs.readdir(dir, function filterList(err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + filter) {
      console.log(file);
    }
  });
});
