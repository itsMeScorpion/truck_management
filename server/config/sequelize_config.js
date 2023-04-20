const Sequelize = require('sequelize');
const { database } = require('../config');

// console.log(database);
const sequelize = new Sequelize(database);

module.exports = sequelize;
