const gallery = require('../../models/gallery');

module.exports = {
  postData: async (req, res) => {
    try {
      // console.log('first');
      console.log('data', req.file.path);
      await gallery.create({
        image: req.file.path,
      });
      return res.send({
        success: true,
        message: 'Image Uploaded Successfully',
      });
    } catch (e) {
      return res.send({
        success: false,
        message: e.message,
      });
    }
  },
  getData: async (req, res, next) => {
    try {
      const data = await gallery.findAll({});
      return res.send({
        success: true,
        data: data,
      });
    } catch (e) {
      return res.send({
        success: false,
        message: e.message,
      });
    }
  },
};
