var benchrest = require('bench-rest');
// var config = require('./config/set_config');
// var config = require('./config/trigger_autotest');
var config = require('./config/mock');

// var config = require('./config/engine.config');

// var flow = {
//   main: [{
//     post: config.url,
//     json: config.body
//   }]
// };

benchrest(config, {
    limit: 10, // concurrent connections
    iterations: 100 // number of iterations to perform
  })
  .on('error', function(err, ctxName) {
    console.error('Failed in %s with err: ', ctxName, err);
  })
  .on('progress', function(stats, percent, concurrent, ips) {
    console.log(JSON.stringify({
      on: 'progress',
      stats: stats,
      percent: percent,
      concurrent: concurrent,
      ips: ips
    }));
  })
  .on('end', function(stats, errorCount) {
    console.log('error count: ', errorCount);
    console.log('stats', stats);
  });