const login = require('../../models/login');
const designation = require('../../models/designation');

module.exports = {
  googleLogin: async (req, res) => {
    try {
      const gtoken = req.body.access_token;
      const users = await login.findOne({
        where: { email: req.body.data.data.email },
      });
      if (!users) {
        return res.send({
          success: false,
          message: 'User Not Found',
        });
      }
      await users.update({
        token: gtoken,
      });
      const desig = await designation.findOne({
        where: { id: users.designationId },
      });
      return res.send({
        success: true,
        message: 'Login successfully',
        data: {
          role: desig.designation,
          gtoken,
        },
      });
    } catch (e) {
      res.send({
        success: false,
        message: e.message,
      });
    }
  },
};
