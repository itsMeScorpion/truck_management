const express = require('express');
const router = express.Router();
const { upload } = require('../../middleware/multer');

const { postData, getData } = require('./controller');

router.route('/').post(upload.single('image'), postData).get(getData);

module.exports = router;
