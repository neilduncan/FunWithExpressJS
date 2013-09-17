var express = require('express');
var app = express();
var engines = require('consolidate');

app.configure(function () {
	app.set("views", __dirname + "/views");
	app.set("view engine", "handlebars");
	app.engine('handlebars', engines.handlebars);
});

app.get('/hello/:name', function(req, res) {
	var model = { 
		'name': req.params.name,
		'query': []
	};
				
	for(var key in req.query) {
		var value = req.query[key];
		
		model.query.push({ 'key': key, 'value': value});
	}
	
	res.render("index", model);
});

app.listen(3000);
console.log('Listening on port 3000');