module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("userproducts", {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          userId: {
              type: Sequelize.INTEGER,
              references: {
                  model: "user",
                  key: "id",
              },
              allowNull: false,
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
          },
          productId: {
              type: Sequelize.INTEGER,
              references: {
                  model: "product",
                  key: "id",
              },
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
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
      await queryInterface.dropTable("userproducts");
  },
};
