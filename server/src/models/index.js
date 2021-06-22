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
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  images: { type: DataTypes.ARRAY(DataTypes.STRING) },
  imageMain: { type: DataTypes.STRING }
});

const Supply = sequelize.define('supply', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  supplierDate: { type: DataTypes.DATE, allowNull: false },
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

Product.hasMany(Supply);
Supply.belongsTo(Product);

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
  Supply
};
