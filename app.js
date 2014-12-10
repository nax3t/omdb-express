var express = require('express'),
app					= express(),
path				= require('path'),
bodyParser 	= require('body-parser'),
request			= require('request'),
ejs 				= require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('form')
});

app.get('/movies', function(req, res) {
	var title = req.query['title'];
	request('http://www.omdbapi.com/?t='+title, function(error, response, body) {
		var movies = JSON.parse(body);
		res.send(movies);
	});
});

app.listen(3000, function() {
	console.log('Server up!');
});