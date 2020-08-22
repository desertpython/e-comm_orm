// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Category has many Products


Category.hasMany(Product, {
  //product has category id which is link between two
  foreignKey: 'category_id'
});

// Product belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product-to-tag',
  foreignKey: 'product_id',
})
// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag, 
  // as: 'tag-to-product', 
  foreignKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
