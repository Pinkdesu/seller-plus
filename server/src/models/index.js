const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  secondName: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  role: { type: DataTypes.INTEGER, defaultValue: 1 }
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

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.REAL, allowNull: false },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  images: { type: DataTypes.ARRAY(DataTypes.STRING) }
});

const ProductInfo = sequelize.define('product_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  unit: { type: DataTypes.STRING }
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

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo, { as: 'info' });
ProductInfo.belongsTo(Product);

Category.belongsToMany(Brand, { through: CategoryBrand });
Brand.belongsToMany(Category, { through: CategoryBrand });

module.exports = {
  User,
  Service,
  Basket,
  BasketProduct,
  Product,
  ProductInfo,
  Brand,
  Category,
  CategoryBrand
};
