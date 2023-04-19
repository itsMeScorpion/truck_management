const express = require('express');
const router = express.Router();

const { postData } = require('./controller');
// const { imageUpload } = require('../../middleware/image_upload');

router.route('/').post(postData);

module.exports = router;
