/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const { col, Op, where } = require('sequelize');
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Application } = require('../../models/adminPanel');
const applicationService = require('../../services/applicationService');

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

  async getAll(req, res, next) {
    try {
      const {
        searchValue, clientId, applicationStatusId, page: defPage
      } = req.query;

      const page = defPage > 0 ? defPage : 1;
      const offset = page * 20 - 20;
      const reg = `%${searchValue}%`;

      let applications;

      const searchWhere = {
        [Op.or]: [
          where(col('application_theme.name'), { [Op.iLike]: reg }),
          {
            number: {
              [Op.iLike]: reg
            }
          }
        ]
      };

      if (!searchValue && !clientId && !applicationStatusId) {
        applications = await applicationService.getApplications({ offset });
      }

      if (searchValue && !clientId && !applicationStatusId) {
        applications = await applicationService.getApplications({
          where: searchWhere,
          offset
        });
      }

      if (!searchValue && clientId && !applicationStatusId) {
        applications = await applicationService.getApplications({
          where: { clientId },
          offset
        });
      }

      if (!searchValue && !clientId && applicationStatusId) {
        applications = await applicationService.getApplications({
          where: { applicationStatusId },
          offset
        });
      }

      if (!searchValue && clientId && applicationStatusId) {
        applications = await applicationService.getApplications({
          where: { applicationStatusId, clientId },
          offset
        });
      }

      if (searchValue && clientId && !applicationStatusId) {
        applications = await applicationService.getApplications({
          where: {
            ...searchWhere,
            clientId
          },
          offset
        });
      }

      if (searchValue && !clientId && applicationStatusId) {
        applications = await applicationService.getApplications({
          where: {
            ...searchWhere,
            applicationStatusId
          },
          offset
        });
      }

      if (searchValue && clientId && applicationStatusId) {
        applications = await applicationService.getApplications({
          where: {
            ...searchWhere,
            clientId,
            applicationStatusId
          },
          offset
        });
      }

      return res.json(applications);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ApplicationController();
