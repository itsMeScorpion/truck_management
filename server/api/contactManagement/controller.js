const contact = require('../../models/contact');

module.exports = {
  postData: async (req, res) => {
    try {
      console.log('data', req.body);
      req.body.status = 'unread';
      await contact.create(req.body);
      res.send({
        success: true,
        message:
          'Thanks for the Enquiry, our Representatives will contact you soon!',
      });
    } catch (e) {
      res.send({
        success: false,
        message: e.message,
      });
    }
  },
};
