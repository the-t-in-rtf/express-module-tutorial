var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 5972);

var config = { "app": "sample application" };

var child = require('./child')(config);
app.use('/child',child);

app.use("/",function(req, res) {
	res.send("Hello from the root of " + config.app + ".\n");
    });

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
    });