module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
    },
    current_price: {
      type: Sequelize.FLOAT,
    },
    previous_price: {
      type: Sequelize.FLOAT,
    },
    unit: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.INTEGER,
    },
  });

  return Product;
};
