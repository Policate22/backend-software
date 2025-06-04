const sequelize = require('../config/db');

// Importar modelos
const User = require('./User.model');
const Turno = require('./Turno.model');
const Ocorrencia = require('./ocorrencia.model');
const Checklist = require('./Checklist');
const Conhecimento = require('./Conhecimento');

// Inicializar modelos
const models = {
  User: User(sequelize),
  Turno: Turno(sequelize),
  Ocorrencia: Ocorrencia(sequelize),
  Checklist: Checklist(sequelize),
  Conhecimento: Conhecimento(sequelize)
};

// Definir relacionamentos
models.User.hasMany(models.Turno);
models.Turno.belongsTo(models.User);

models.User.hasMany(models.Ocorrencia);
models.Ocorrencia.belongsTo(models.User);

models.Turno.hasMany(models.Ocorrencia);
models.Ocorrencia.belongsTo(models.Turno);

models.Turno.hasMany(models.Checklist);
models.Checklist.belongsTo(models.Turno);

module.exports = {
  ...models,
  sequelize
};