module.exports = function (dir, filter, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dir, function filterList(err, list) {
    if(err) {
      return callback(err);
    }
    var data = [];
    list.forEach(function (file) {
      if (path.extname(file) === '.' + filter) {
        data += file
      }
    });
    callback(null, data);
  });
};
