/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const { col } = require('sequelize');
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const {
  Application, Client, ApplicationStatus, ApplicationTheme
} = require('../../models/adminPanel');

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
      const applications = await Application.findAll({
        attributes: {
          include: [
            [col('client.name'), 'client'],
            [col('application_status.name'), 'status'],
            [col('application_theme.name'), 'theme']
          ]
        },
        include: [
          {
            model: Client,
            attributes: []
          },
          {
            model: ApplicationStatus,
            attributes: []
          },
          {
            model: ApplicationTheme,
            attributes: []
          }
        ],
        raw: true
      });

      return res.json({ applications });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ApplicationController();
