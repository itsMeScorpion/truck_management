const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_config');
const gallery = sequelize.define('gallery', {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = gallery;
