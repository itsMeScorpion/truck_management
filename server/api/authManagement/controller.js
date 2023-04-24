const login = require('../../models/login');
const designation = require('../../models/designation');
const bcrypt = require('bcrypt');

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
  login: async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      const users = await login.findOne({ where: { email: email } });
      if (!users)
        return res.json({
          success: false,
          message: 'invalid username or password',
        });
      const a = await bcrypt.compare(password, users.password);
      if (!(await login.verifyPassword(password, users.password, users.salt)))
        return res.json({
          success: false,
          message: 'invalid password',
        });
      const accessToken = await login.generateAuthToken(users);
      const refreshToken = await login.generateAuthToken(users);
      req.body.token = accessToken;
      //await user.findByIdAndUpdate(users._id, { token: accessToken });
      const doesuserExists = await login.findByPk(users.id);
      if (!doesuserExists)
        return { success: false, message: " user doesn't exists" };
      await doesuserExists.update({
        token: accessToken,
      });
      const desig = await designation.findOne({
        where: { id: users.designationId },
      });
      console.log('designation', desig.designation);
      return res.send({
        success: true,
        message: 'Login successfully',
        data: {
          role: desig.designation,
          accessToken,
          refreshToken,
        },
      });
    } catch (e) {
      console.log(e.message);
      return res.send({
        success: false,
        message: e.message,
      });
    }
  },
};
