const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Conhecimento = sequelize.define('Conhecimento', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  });

  return Conhecimento;
};