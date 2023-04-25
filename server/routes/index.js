var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/contact-us', require('../api/contactManagement/index'));
router.use('/auth', require('../api/authManagement/index'));
router.use('/gallery', require('../api/galleryManagement/index'));
router.use('/designation', require('../api/designationManagement/index'));
router.use('/permission', require('../api/permissionManagement/index'));

module.exports = router;
