const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Ocorrencia = sequelize.define('Ocorrencia', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gravidade: {
      type: DataTypes.ENUM('baixa', 'media', 'alta'),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pendente', 'resolvida'),
      defaultValue: 'pendente'
    }
  });

  return Ocorrencia;
};