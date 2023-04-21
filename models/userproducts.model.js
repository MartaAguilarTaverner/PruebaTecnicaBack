const { Model } = require("sequelize");
const UserModel = require("./user.model");
const ProductModel = require("./product.model");

module.exports = (sequelize, DataTypes) => {
    class UserProducts extends Model {
        static associate(models) {
            UserProducts.belongsTo(models.user, {
                foreignKey: "userId",
            });

            UserProducts.belongsTo(models.product, {
                foreignKey: "productId",
            });

        }
    }

    UserProducts.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: UserModel,
                    key: "id",
                },
                allowNull: false,
            },
            productId: {
                type: DataTypes.INTEGER,
                references: {
                    model: ProductModel,
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "userproducts",
            tableName: "userproducts",
        }
    );

    return UserProducts;
};