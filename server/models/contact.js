const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_config');

const contact = sequelize.define('contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('read', 'unread'),
    allowNull: true,
  },
});

module.exports = contact;
