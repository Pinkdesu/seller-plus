const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const { ROLES } = require('../constants');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING(1000) },
  firstName: { type: DataTypes.STRING, allowNull: false },
  secondName: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: ROLES.USER }
});

const Token = sequelize.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING(1000) }
});

const Service = sequelize.define('service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.REAL },
  description: { type: DataTypes.STRING, allowNull: false },
  fullDescription: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING }
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const BasketProduct = sequelize.define('basket_product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
});

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalPrice: { type: DataTypes.REAL, allowNull: false },
  deliveryPrice: { type: DataTypes.REAL, allowNull: false, defaultValue: 0 },
  sentAt: { type: DataTypes.DATE },
  doneAt: { type: DataTypes.DATE },
  address: { type: DataTypes.STRING, allowNull: false }
});

const OrderProduct = sequelize.define('order_product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  purchasePrice: { type: DataTypes.REAL, allowNull: false }
});

const OrderStatus = sequelize.define('order_status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING, allowNull: false }
});

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING(3000), allowNull: false },
  price: { type: DataTypes.REAL, allowNull: false },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  images: { type: DataTypes.ARRAY(DataTypes.STRING) },
  imageMain: { type: DataTypes.STRING }
});

const Invoice = sequelize.define('invoice', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.STRING, allowNull: false, unique: true },
  supplierDate: { type: DataTypes.DATE, allowNull: false }
}, { timestamps: false });

const InvoiceProduct = sequelize.define('invoice_product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  supplierPrice: { type: DataTypes.REAL, allowNull: false, defaultValue: 0 }
}, { timestamps: false });

const ProductInfo = sequelize.define('product_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false }
});

const Unit = sequelize.define('unit', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false }
});

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const CategoryBrand = sequelize.define('category_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

/*----------------------------------------*/

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
  number: { type: DataTypes.STRING, unique: true },
  submissionDate: { type: DataTypes.DATE },
  executionDate: { type: DataTypes.DATE },
  document: { type: DataTypes.STRING },
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
}, { timestamps: false });

const Project = sequelize.define('project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.STRING, unique: true },
  submissionDate: { type: DataTypes.DATE },
  description: { type: DataTypes.STRING }
});

const ProjectFile = sequelize.define('project_file', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
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
  role: { type: DataTypes.STRING, defaultValue: ROLES.ADMIN }
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

/*------------------------------------*/

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Token);
Token.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Order.hasMany(OrderProduct, { as: 'products' });
OrderProduct.belongsTo(Order);

OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.belongsToMany(Invoice, { through: InvoiceProduct });
Invoice.belongsToMany(Product, { through: InvoiceProduct });

Employee.hasMany(Invoice);
Invoice.belongsTo(Employee);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);

Product.hasMany(ProductInfo, { as: 'info' });
ProductInfo.belongsTo(Product);

Unit.hasMany(ProductInfo);
ProductInfo.belongsTo(Unit);

Category.belongsToMany(Brand, { through: CategoryBrand });
Brand.belongsToMany(Category, { through: CategoryBrand });

module.exports = {
  User,
  Order,
  Unit,
  OrderProduct,
  OrderStatus,
  Service,
  Basket,
  BasketProduct,
  Product,
  ProductInfo,
  Brand,
  Category,
  Token,
  CategoryBrand,
  Invoice,
  InvoiceProduct,
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
