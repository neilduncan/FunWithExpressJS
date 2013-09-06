var express = require('express');
var app = express();
var engines = require('consolidate');

app.configure(function () {
	app.set("views", __dirname + "/views");
	app.set("view engine", "handlebars");
	app.engine('handlebars', engines.handlebars);
});

app.get('/hello/:name', function(req, res){
	res.render("index", { name: req.params.name });
});

app.listen(3000);
console.log('Listening on port 3000');