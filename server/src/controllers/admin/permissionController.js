/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Permission } = require('../../models');

class PermissionController {
  async create(req, res, next) {
    try {
      const {
        projectId,
        number,
        submissionDate,
        description
      } = req.body;
      const { document } = req.files;
      const fileName = moveFile(document, 'permisson');

      const permission = await Permission.create({
        projectId,
        number,
        submissionDate,
        description,
        document: fileName
      });

      return res.json({ permission });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const permissions = await Permission.findAll();

      return res.json({ permissions });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new PermissionController();
