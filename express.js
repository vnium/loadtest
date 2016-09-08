'use strict';
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.json('ok');
});
app.listen(7000);
console.log('localhost:7000');