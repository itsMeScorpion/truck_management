const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwts } = require('../config');

const login = sequelize.define(
  'login',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

login.validatePassword = function (pass) {
  return /^(?=.*\d).{8,}$/.test(pass);
};
login.generateSalt = async function () {
  return await bcrypt.genSalt();
};
login.hashPassword = async function (pass, salt) {
  return await bcrypt.hash(pass, salt);
};
login.verifyPassword = async function (pass, hash, salt) {
  const hashPassword = await bcrypt.hash(pass, salt);
  if (hashPassword === hash) return true;
  else return false;
};
login.generateAuthToken = function (data) {
  let expiresIn = expireIn(10);
  if (data.rememberMe) {
    console.log('Entered---');
    expiresIn = expireIn(720);
  }
  return jwt.sign(
    {
      id: data.id,
      email: data.email,
      validity: data.password.concat(data.id).concat(data.email),
    },
    jwts.secret_key,
    { expiresIn }
  );
};
const expireIn = (numDays) => {
  const dateObj = new Date();
  return dateObj.setMinutes(dateObj.getMinutes() + numDays);
};

login.associate = (models) => {
  login.belongsTo(models.designation, {
    foreignKey: 'designationId',
    allowNull: true,
  });
};

module.exports = login;
