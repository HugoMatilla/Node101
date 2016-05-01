var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {
	
	app.get('/api/person/:id', function(req, res) {
	// get that data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});
	
	app.post('/api/person',jsonParser, function(req, res) {
		res.send(`Thank you for the JSON data ${req.body.firstname} ${req.body.lastname}`);
        console.log(req.body.firstname);
        console.log(req.body.lastname);	
	});
	
	app.post('/api/persons', function(req, res) {
		res.writeHead(404);
	    res.end();
	});
	
	app.delete('/api/person/:id', function(req, res) {
		res.json({ status: `${req.params.id} deleted`});
	});
	
}