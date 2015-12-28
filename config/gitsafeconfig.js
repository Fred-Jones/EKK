var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'dk',
      admin: {
        username: '',
        password: ''
      }
    },
    port: 3000,
    db: 'mongodb://localhost/EKK-development',
    mid: {
      riot:{
        apikey: 'key',
        username: 'ElPatroncito',
        email: 'mm',
        constraints: {
          ratelimits: ['500 requests every 10 minutes', '10 requests every 10 seconds']
        }
      },
      blizz: {
        apikey: 'key',
        username: 'DonJulian',
        email: 'mmaammmbbuu@gmail.com'
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
