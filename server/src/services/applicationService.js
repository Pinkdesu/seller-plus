/* eslint-disable class-methods-use-this */
const { col } = require('sequelize');
const {
  Application, Client, ApplicationStatus, ApplicationTheme
} = require('../models/adminPanel');

const LIMIT = 10;

class ApplicationService {
  async getApplications(config = {}) {
    const appWithCount = await Application.findAndCountAll({
      attributes: {
        include: [
          ['applicationStatusId', 'statusId'],
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
      limit: LIMIT,
      raw: true,
      ...config
    });

    const { count, rows: applications } = appWithCount;

    const pagesCount = Math.ceil(count / LIMIT);

    return { pagesCount, applications };
  }
}

module.exports = new ApplicationService();
