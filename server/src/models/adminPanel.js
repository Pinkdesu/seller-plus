const { DataTypes, STRING } = require('sequelize');
const sequelize = require('../database/db');
const { ROLES } = require('../constants');

const Client = sequelize.define('client', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  phone: { type: DataTypes.STRING },
  passportSeries: { type: DataTypes.INTEGER },
  passportNumber: { type: DataTypes.INTEGER },
  issued: { type: DataTypes.STRING },
  issuedDate: { type: DataTypes.DATE },
  address: { type: DataTypes.STRING },
  inn: { type: DataTypes.STRING }
});

const Employee = sequelize.define('employee', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: { type: STRING, defaultValue: ROLES.ADMIN }
});

const Position = sequelize.define('position', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true }
});

Position.hasMany(Employee);
Employee.belongsTo(Position);

module.exports = {
  Employee,
  Position,
  Client
};
