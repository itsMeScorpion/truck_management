require('dotenv').config();
const jwt = require('jsonwebtoken');
const users = require('../models/login');
const config = require('../config/config.json');
const JWT_SECRET = config.local.jwts;

module.exports = async (req, res, next) => {
  try {
    if (
      req.originalUrl.startsWith('/login') ||
      req.originalUrl.startsWith('/contact')
    )
      return next();
    console.log('auth middleware entered');
    const token = req.header('Authorization')
      ? req.header('Authorization').replace('Bearer ', '')
      : null;
    if (!token) {
      return res.json({
        success: false,
        message: 'Unauthorized Access',
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET.secret_key);
    // console.log('decoded', decoded.validity);

    if (!decoded) {
      return res.json({
        success: false,
        message: 'Invalid token1',
      });
    }

    if (decoded.exp < Date.now()) {
      return res.json({
        success: false,
        message: 'Token expired',
      });
    }
    const isUserExists = await users.findByPk(decoded.id);
    // console.log('auth is user exists', isUserExists);
    if (!isUserExists) {
      console.log('no user found auth');
      return res.json({
        success: false,
        message: 'Access Denied',
      });
    }
    const u = await users.findOne({ where: { id: decoded.id } });
    //console.log('token>>>', token); //token received from header
    // console.log('PPPPPPPP', u);
    if (u.dataValues.token !== token) {
      return res.json({
        success: false,
        message: 'invalid token123',
      });
    }
    let matchValidity = isUserExists.password
      .concat(isUserExists.id)
      .concat(isUserExists.email);
    // console.log('match validity', matchValidity);
    if (matchValidity != decoded.validity) {
      return res.json({
        success: false,
        message: 'Access Denied',
      });
    }

    req.user = decoded;
    return next();
  } catch (ex) {
    //console.log('error', ex);
    res.json({
      success: false,
      message: ex.message,
    });
  }
};
