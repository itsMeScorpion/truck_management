const permission = require('../../models/permission');
const permisionAllowed = require('../../models/permissionAllowed');

module.exports = {
  getData: async (req, res, next) => {
    try {
      const data = await permission.findAll({});
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
  editData: async (req, res) => {
    try {
      console.log('body', req.body);
      await permisionAllowed.destroy({
        where: {},
        truncate: true,
      });
      await permisionAllowed.bulkCreate(req.body);
      desId = req.body.map((item) => item.designationId);
      console.log('desId', desId);
      const permission_data = await permisionAllowed.findAll({
        where: { designationId: desId },
        include: permission,
      });
      console.log('mappingArray', permission_data);

      const mappingArray = permission_data.map((item) => {
        return {
          menu: item.permission.menu,
          subMenu: item.permission.subMenu,
        };
      });
      let socket = req.app.locals.socket;
      socket.broadcast.emit('GetPermissions', mappingArray);

      res.send({
        success: true,
        message: 'Data Updated',
      });
    } catch (e) {
      res.send({
        success: false,
        message: e.message,
      });
    }
  },
};
