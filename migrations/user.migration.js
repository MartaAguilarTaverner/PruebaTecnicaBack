module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("user", {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          name: {
              type: Sequelize.STRING,
              require: true,
              allowNull: false,
              minLenght: 5,
          },
          surname: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            minLenght: 5,
          },
          DNI: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            minLenght: 9,
          },
          email: {
              type: Sequelize.STRING,
              require:true,
              allowNull: false,
          },
          phone: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            minLenght: 9,
          },
          direction: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            minLenght: 20,
          },
          city: {
            type: Sequelize.STRING,
            require: true,
            allowNull: false,
            minLenght: 20,
          },
          postalCode:{
          type: Sequelize.INTEGER,
          require: true,
          allowNull: false,
          minLenght: 5,
          },
          age: Sequelize.DATE,
          password: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
          },
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("user");
  },
};
