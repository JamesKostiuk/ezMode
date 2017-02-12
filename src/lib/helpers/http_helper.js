//var http = require('http');
var request = require('request');

module.exports = {
	
	get: function (aUrl, aCallback) {
		request(aUrl, (err, res, body) => {
			if (!err && res.statusCode == 200) {
				aCallback(body);
			} else {
				console.log('Error contacting ' + aUrl + '.\nError: ' + err);
			}
		});
	}
}
