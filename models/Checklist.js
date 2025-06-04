const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Checklist = sequelize.define('Checklist', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itens: {
      type: DataTypes.JSON,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Checklist;
};