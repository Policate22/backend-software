const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Turno = sequelize.define('Turno', {
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('manhã', 'tarde', 'noite'),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('em_andamento', 'finalizado'),
      defaultValue: 'em_andamento'
    },
    observacoes: {
      type: DataTypes.TEXT
    }
  });

  return Turno;
};