var loadtest = require('loadtest');
// var config = require('./config/set_config');
var config = require('./config/local');
// var config = require('./config/engine.config');

config = config.main[0];
console.log('Start...');
var options = {
	url: config.post,
	method: 'POST',
	body: config.json,
	contentType: 'application/json',
	// concurrency: 5,
	maxRequests: 200,
	requestsPerSecond: 20,
	timeout: 30000,
	statusCallback: function(latency, result, error) {
		// console.log(JSON.stringify({
		// 	latency: latency,
		// 	result: result,
		// 	error: error
		// }));
		console.log(error ? error : 'ok');
	}
};
loadtest.loadTest(options, function(error, result) {
	if (error) {
		return console.error('Got an error: %s', error);
	}
	console.log('DONE.');
	console.log(result);
});