/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize');
const ApiError = require('../../error/apiError');
const {
  Application, ApplicationStatus, Employee
} = require('../../models/adminPanel');

class ReportController {
  async getEmployeeReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

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
          where: {
            submissionDate: {
              [Op.gte]: periodFrom,
              [Op.lte]: periodTo
            }
          },
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

        const result = { id, employee: name };

        statuses.forEach((value) => {
          const count = applications.reduce(
            (sum, current) => (
              current.dataValues.status === value.id ? sum + 1 : sum
            ),
            0
          );

          result[`status${value.id}`] = count;
        });

        return result;
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReportController();
