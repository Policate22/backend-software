const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    setor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};