/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
// const { fn, col } = require('sequelize');
const ApiError = require('../../error/apiError');
const {
  Application, ApplicationStatus, Employee
} = require('../../models/adminPanel');

class ReportController {
  async getEmployeeReport(req, res, next) {
    try {
      const statuses = await ApplicationStatus.findAll({
        attributes: ['id', 'name']
      });

      const employee = await Employee.findAll({
        attributes: [
          'id',
          'name'
        ],
        include: {
          model: Application,
          attributes: ['id', ['applicationStatusId', 'status']],
          through: {
            attributes: []
          }
        },
        group: [
          'employee.id',
          'applications.id'
        ]
      });

      const report = employee.map((item) => {
        const { id, name, applications } = item;

        const data = statuses.map((value) => {
          const count = applications.reduce(
            (sum, current) => (
              current.dataValues.status === value.id ? sum + 1 : sum
            ),
            0
          );

          return {
            id: value.id,
            name: value.name,
            count
          };
        });

        return {
          id,
          name,
          statuses: data
        };
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReportController();
