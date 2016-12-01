var express = require('express');
var app = express();

var myModule = [
	{ color:  "red"},
	{ color:  "green"},
	{ color:  "blue"},
	{ color:  "yellow"}
	];


  

app.get('/api/myModule', function (req, res) {
	res.send(myModule);
});

app.get('api/myModule/1', function (req, res) {
	res.send(myModule[0]);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});