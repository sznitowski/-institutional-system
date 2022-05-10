'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // Student.belongsToMany(Subjects);
    }
  }
  Subjects.init({
    maths: DataTypes.INTEGER,
    programming: DataTypes.INTEGER,
    structureAndAlgorithms: DataTypes.INTEGER,
    english: DataTypes.INTEGER,
    programming2: DataTypes.INTEGER,
    structureAndAlgorithms2: DataTypes.INTEGER,
    dataBaseStructure: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subjects',
  });

  
  return Subjects;
};