/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const {
  Op, col, fn
} = require('sequelize');
const ApiError = require('../../error/apiError');
const {
  Application, ApplicationStatus, ApplicationTheme, Employee, Client, CityDistrict
} = require('../../models/adminPanel');
const {
  Product, OrderProduct, User, Order
} = require('../../models');

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

  async getClientReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

      const report = await Application.findAll({
        attributes: [
          'id',
          [col('application_theme.name'), 'theme'],
          [col('application_status.name'), 'status'],
          [col('client.name'), 'name']
        ],
        where: {
          submissionDate: {
            [Op.gte]: periodFrom,
            [Op.lte]: periodTo
          }
        },
        include: [
          {
            model: ApplicationTheme,
            attributes: []
          },
          {
            model: Client,
            attributes: []
          },
          {
            model: ApplicationStatus,
            attributes: []
          }
        ]
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getProductReport(_, res, next) {
    try {
      const report = await Product.findAll({
        attributes: [
          'id',
          'name',
          'count'
        ]
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getDistrictReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

      const report = await Application.findAll({
        attributes: [
          'id',
          [col('application_theme.name'), 'theme'],
          [col('application_status.name'), 'status'],
          [col('client.name'), 'name'],
          [col('client.city_district.name'), 'district']
        ],
        where: {
          submissionDate: {
            [Op.gte]: periodFrom,
            [Op.lte]: periodTo
          }
        },
        include: [
          {
            model: ApplicationTheme,
            attributes: []
          },
          {
            model: Client,
            attributes: [],
            include: {
              model: CityDistrict,
              attributes: []
            }
          },
          {
            model: ApplicationStatus,
            attributes: []
          }
        ]
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAppCountReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

      const report = await Client.findAll({
        attributes: [
          'id',
          'name',
          [fn('COUNT', col('applications.id')), 'count']
        ],
        include: {
          model: Application,
          attributes: [],
          where: {
            submissionDate: {
              [Op.gte]: periodFrom,
              [Op.lte]: periodTo
            }
          }
        },
        group: ['client.id']
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getOrderReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

      const report = await Product.findAll({
        attributes: [
          'id',
          'name',
          [fn('COUNT', col('order_products.orderId')), 'count']
        ],
        include: {
          model: OrderProduct,
          attributes: [],
          where: {
            createdAt: {
              [Op.gte]: periodFrom,
              [Op.lte]: periodTo
            }
          }
        },
        group: ['product.id']
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getUserReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

      const report = await User.findAll({
        attributes: [
          'id',
          [fn('COUNT', col('orders.id')), 'count'],
          [fn('CONCAT', col('firstName'), ' ', col('secondName')), 'name']
        ],
        include: {
          model: Order,
          where: {
            createdAt: {
              [Op.gte]: periodFrom,
              [Op.lte]: periodTo
            }
          },
          attributes: []
        },
        group: ['user.id']
      });

      return res.json({ report });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAverageCheckReport(req, res, next) {
    try {
      const { periodFrom, periodTo } = req.query;

      const options = {
        where: {
          createdAt: {
            [Op.gte]: periodFrom
          }
        }
      };

      const sum = await Order.sum('totalPrice', options);
      const count = await Order.count(options);
      const average = sum / count;

      return res.json({
        report: [{ sum: `${sum} руб.`, count, average: `${average} руб.` }]
      });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReportController();
