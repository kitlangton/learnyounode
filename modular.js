var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    return console.log("Error was found");
  }
    data.forEach(function (item) {
      console.log(item);
    });
});
