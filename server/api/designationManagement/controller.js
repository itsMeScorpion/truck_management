const designation = require('../../models/designation');

module.exports = {
  getData: async (req, res, next) => {
    try {
      const data = await designation.findAll({});
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
