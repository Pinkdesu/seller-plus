/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
const { col } = require('sequelize');
const {
  Application,
  ApplicationStatus,
  ApplicationTheme,
  Client,
  Employee
} = require('../models');

const LIMIT = 10;

class ApplicationService {
  async getApplications(config = {}) {
    const appWithCount = await Application.findAndCountAll({
      attributes: {
        include: [
          ['applicationStatusId', 'statusId']
        ]
      },
      include: [
        {
          model: Employee,
          attributes: ['name'],
          required: false,
          through: {
            attributes: []
          }
        },
        {
          model: Client,
          required: false,
          attributes: ['name']
        },
        {
          model: ApplicationStatus,
          attributes: ['name']
        },
        {
          model: ApplicationTheme,
          attributes: ['name']
        }
      ],
      limit: LIMIT,
      ...config
    }).then((data) => {
      const { rows, count } = data;

      const applications = rows.map((item) => {
        const {
          client,
          employees,
          application_status,
          application_theme,
          ...other
        } = item.dataValues;

        const employeesData = employees.reduce(
          (all, current, index) => {
            const { name } = current;

            if (index === 0) return name;
            return `${all}, ${name}`;
          }, ''
        );

        return {
          ...other,
          employees: employeesData,
          client: client.name,
          status: application_status.name,
          theme: application_theme.name
        };
      });

      const pagesCount = Math.ceil(count / LIMIT);
      return { pagesCount, applications };
    });

    return appWithCount;
  }
}

module.exports = new ApplicationService();
