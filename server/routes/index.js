var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/contact-us', require('../api/contactManagement/index'));
router.use('/auth', require('../api/authManagement/index'));
router.use('/gallery', require('../api/galleryManagement/index'));

module.exports = router;
