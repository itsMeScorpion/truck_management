const brand = require('../../models/brand');
const truckModal = require('../../models/truckModal');
const varient = require('../../models/varient');

module.exports = {
  postData: async (req, res) => {
    try {
    } catch (e) {
      return res.send({
        success: false,
        message: e.message,
      });
    }
  },
  getData: async (req, res) => {
    try {
      const brandData = await brand.findAll({});
      const truckModal = await brand.findAll({});
      const varient = await brand.findAll({});

      return res.send({
        success: true,
        data: {data},
      });
    } catch (e) {
      return res.send({
        success: false,
        message: e.message,
      });
    }
  },
};
