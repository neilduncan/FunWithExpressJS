var express = require('express');
var app = express();
var engines = require('consolidate');
var url = require('url');

app.configure(function () {
	app.set("views", __dirname + "/views");
	app.set("view engine", "handlebars");
	app.engine('handlebars', engines.handlebars);
});

app.get('/bounce/:asin', function(req, res) {	
	var query = url.parse(req.originalUrl).search;
	res.redirect('http://www.amazon.com/dp/' + req.params.asin + query);
});

app.get('/target/:asin', function(req, res) {
	var asin = req.params.asin
	var model = { 'asin': req.params.asin, 'query': [] }
	for(var key in req.query) {
		var value = req.query[key];
		model.query.push({ 'key': key, 'value': value});
	}
	
	res.render('target', model);
});

app.listen(3000);
console.log('Listening on port 3000');