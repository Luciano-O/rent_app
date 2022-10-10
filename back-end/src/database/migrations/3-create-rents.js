module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rents', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        field: "user_id",
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        field: "product_id",
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      months: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('rents');
  },
};
