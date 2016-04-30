module.exports = function(app) {
	
	app.get('/api/person/:id', function(req, res) {
	// get that data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});
	
	app.post('/api/person', function(req, res) {
		res.writeHead(404);
	    res.end();
	});
	
	app.delete('/api/person/:id', function(req, res) {
		res.json({ status: `${req.params.id} deleted`});
	});
	
}