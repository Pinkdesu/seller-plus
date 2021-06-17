/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Application } = require('../../models/adminPanel');

class ApplicationController {
  async create(req, res, next) {
    try {
      const {
        submissionDate,
        description,
        applicationStatusId,
        applicationThemeId,
        clientId
      } = req.body;
      const { document } = req.files;
      const fileName = moveFile(document, 'applications');

      const application = await Application.create({
        submissionDate,
        description,
        applicationStatusId,
        applicationThemeId,
        clientId,
        document: fileName
      });

      return res.json({ application });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const applications = await Application.findAll();

      return res.json({ applications });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ApplicationController();
