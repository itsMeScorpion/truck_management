const express = require('express');
const router = express.Router();

const { googleLogin, login } = require('./controller');
// const { imageUpload } = require('../../middleware/image_upload');

router.route('/login').post(googleLogin);
router.route('/signin').post(login);

module.exports = router;
