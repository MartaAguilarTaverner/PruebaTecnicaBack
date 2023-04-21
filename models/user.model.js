const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.userproducts, {
                foreignKey: "userId",
            });
        }
    }

    User.init(
        {
            name: {
                type: DataTypes.STRING,
                require: true,
                allowNull: false,
                minLenght: 5,
            },
            surname: {
              type: DataTypes.STRING,
              require: true,
              allowNull: false,
              minLenght: 5,
            },
            DNI: {
              type: DataTypes.STRING,
              require: true,
              allowNull: false,
              minLenght: 9,
            },
            email: {
                type: DataTypes.STRING,
                require:true,
                allowNull: false,
            },
            phone: {
              type: DataTypes.STRING,
              require: true,
              allowNull: false,
              minLenght: 9,
            },
            direction: {
              type: DataTypes.STRING,
              require: true,
              allowNull: false,
              minLenght: 20,
            },
            city: {
              type: DataTypes.STRING,
              require: true,
              allowNull: false,
              minLenght: 20,
            },
            postalCode:{
            type: DataTypes.INTEGER,
            require: true,
            allowNull: false,
            minLenght: 5,
            },
            age: DataTypes.DATE,
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "user",
            tableName: "user",
        }
    );

    return User;
};