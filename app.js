var express = require('express'),
app					= express(),
path				= require('path'),
bodyParser 	= require('body-parser'),
ejs 				= require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));

// req.body

app.get('/', function(req, res) {
	res.render('form')
});

app.listen(3000, function() {
	console.log('Server up!');
});