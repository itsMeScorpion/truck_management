const express = require('express');
const router = express.Router();

const { getData } = require('./controller');
// const { imageUpload } = require('../../middleware/image_upload');

router.route('/').get(getData);
// router.route('/signin').post(login);

module.exports = router;
