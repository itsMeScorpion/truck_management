const express = require('express');
const router = express.Router();

const { googleLogin } = require('./controller');
// const { imageUpload } = require('../../middleware/image_upload');

router.route('/login').post(googleLogin);

module.exports = router;
