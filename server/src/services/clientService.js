/* eslint-disable class-methods-use-this */
const { col } = require('sequelize');
const { Client, CityDistrict } = require('../models/adminPanel');

const LIMIT = 10;

class ClientService {
  async getClietns(config = {}) {
    const clientsWithCount = await Client.findAndCountAll({
      attributes: {
        include: [[col('city_district.name'), 'district']],
        exclude: ['createdAt', 'updatedAt', 'cityDistrictId', 'clientCategoryId']
      },
      include: {
        model: CityDistrict,
        attributes: []
      },
      raw: true,
      limit: LIMIT,
      ...config
    });
    const { count, rows: clients } = clientsWithCount;

    const pagesCount = Math.ceil(count / LIMIT);

    return { pagesCount, clients };
  }
}

module.exports = new ClientService();
