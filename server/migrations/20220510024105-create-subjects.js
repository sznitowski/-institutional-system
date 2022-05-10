'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maths: {
        type: Sequelize.INTEGER
      },
      programming: {
        type: Sequelize.INTEGER
      },
      structureAndAlgorithms: {
        type: Sequelize.INTEGER
      },
      english: {
        type: Sequelize.INTEGER
      },
      programming2: {
        type: Sequelize.INTEGER
      },
      structureAndAlgorithms2: {
        type: Sequelize.INTEGER
      },
      dataBaseStructure: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      subject_id: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Subjects');
  }
};