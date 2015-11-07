
var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'dk'
    },
    port: 3000,
    db: 'mongodb://localhost/dk-development',
    mid: {
      riot:{
        apikey: '7373751d-df26-46a0-90ae-82037012187a',
        username: 'ElPatroncito',
        email: 'mmaammbbuu@gmail.com',
        constraints: {
          ratelimits: ['500 requests every 10 minutes', '10 requests every 10 seconds']
        }
      },
      blizz: {
        apikey: '',
        username: 'ElPatron'
      }
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'dk'
    },
    port: 3000,
    db: 'mongodb://localhost/dk-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'dk'
    },
    port: 3000,
    db: 'mongodb://localhost/dk-production'
  }
};

module.exports = config[env];
