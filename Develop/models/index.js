// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsToMany(Category, {
  through: Vote, //replace with actual data
  as: 'voted_posts', //replace with actual data
  foreignKey: 'user_id' // replace
});

// Category has many Products


Category.belongsToMany(Product, {
  //yada yada yada
})

// Product belongToMany Tags (through ProductTag)

Product.belongsToMany(ProductTag, {

})
// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
