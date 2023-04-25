const express = require('express');
const router = express.Router();

const { getData, editData } = require('./controller');

router.route('/').get(getData).patch(editData);

module.exports = router;
