const { DataTypes, STRING } = require('sequelize');
const sequelize = require('../database/db');
const { ROLES } = require('../constants');
const { Product } = require('./index');

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
  companyName: { type: DataTypes.STRING },
  legalAddress: { type: DataTypes.STRING },
  ogrn: { type: DataTypes.STRING },
  inn: { type: DataTypes.STRING }
});

const ClientCategory = sequelize.define('client_category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true }
});

const CityDistrict = sequelize.define('city_district', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true }
});

const Application = sequelize.define('application', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  submissionDate: { type: DataTypes.DATE },
  documents: { type: DataTypes.ARRAY(DataTypes.STRING) },
  description: { type: DataTypes.STRING }
});

const ApplicationStatus = sequelize.define('application_status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true }
});

const ApplicationTheme = sequelize.define('application_theme', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true }
});

const ApplicationEmployee = sequelize.define('application_employee', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const Project = sequelize.define('project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.STRING, unique: true },
  submissionDate: { type: DataTypes.DATE },
  description: { type: DataTypes.STRING }
});

const ProjectFile = sequelize.define('project_file', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  document: { type: DataTypes.STRING }
});

const Act = sequelize.define('act', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.STRING, unique: true },
  submissionDate: { type: DataTypes.DATE },
  document: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING }
});

const Permission = sequelize.define('permission', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.STRING, unique: true },
  submissionDate: { type: DataTypes.DATE },
  document: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING }
});

const Contract = sequelize.define('contract', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  number: { type: DataTypes.STRING, unique: true },
  submissionDate: { type: DataTypes.DATE },
  document: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING }
});

const ProjectProduct = sequelize.define('project_product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER }
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

ClientCategory.hasMany(Client);
Client.belongsTo(ClientCategory);

Client.hasMany(Application);
Application.belongsTo(Client);

ApplicationStatus.hasMany(Application);
Application.belongsTo(ApplicationStatus);

ApplicationTheme.hasMany(Application);
Application.belongsTo(ApplicationTheme);

Application.belongsToMany(Employee, { through: ApplicationEmployee });
Employee.belongsToMany(Application, { through: ApplicationEmployee });

Application.hasOne(Project);
Project.belongsTo(Application);

Application.hasMany(Contract);
Contract.belongsTo(Application);

Project.hasMany(ProjectFile);
ProjectFile.belongsTo(Project);

Project.hasMany(Act);
Act.belongsTo(Project);

Project.hasMany(Permission);
Permission.belongsTo(Project);

Project.belongsToMany(Product, { through: ProjectProduct });
Product.belongsToMany(Project, { through: ProjectProduct });

CityDistrict.hasMany(Client);
Client.belongsTo(CityDistrict);

module.exports = {
  Client,
  Employee,
  Position,
  CityDistrict,
  ClientCategory,
  Application,
  ApplicationTheme,
  ApplicationStatus,
  ApplicationEmployee,
  Project,
  ProjectFile,
  ProjectProduct,
  Contract,
  Act,
  Permission
};
