const express = require('express');
const router = express.Router();

const { postData, getData } = require('./controller');

router.route('/').post(postData).get(getData);

module.exports = router;
