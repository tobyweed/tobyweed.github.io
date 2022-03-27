var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('landing');
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log('server is listening');
});
// app.listen(3000, process.env.IP, function() {
// 	console.log('server is listening');
// });
