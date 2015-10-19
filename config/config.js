
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
    db: 'mongodb://localhost/dk-development'
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
