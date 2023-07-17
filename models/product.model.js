const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.hasMany(models.userproducts, {
                foreignKey: "productId",
            });
        }
    }

    Product.init (
      {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        minLenght: 2,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specification1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specification2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specification3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specification4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specification5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specification6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specification7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imgURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "product",
    tableName: "product",
}
);

return Product;
};