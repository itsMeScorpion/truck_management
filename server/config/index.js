require('dotenv-flow').config();
const env = process.env.NODE_ENV || 'local';
const configuration = require('./config.json');

module.exports = configuration[env];
