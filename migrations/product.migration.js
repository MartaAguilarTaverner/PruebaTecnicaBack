module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("products", {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true,
              minLenght: 2,
          },
          description: {
              type: Sequelize.TEXT,
              allowNull: false,
          },
          year: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          brand: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          specification1: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          specification2: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          specification3: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          specification4: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          specification5: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          specification6: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          specification7: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
          },
          imgURL: {
              type: Sequelize.STRING,
              allowNull: false,
          },
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("products");
  },
};