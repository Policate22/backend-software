require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, User, Turno, Ocorrencia, Checklist, Conhecimento } = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/turnos', require('./routes/turnoRoutes'));
app.use('/api/ocorrencias', require('./routes/ocorrenciaRoutes'));
app.use('/api/checklists', require('./routes/checklistRoutes'));
app.use('/api/conhecimentos', require('./routes/conhecimentoRoutes'));

// Teste de conexão com o banco
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    
    // Sincronizar modelos com o banco (force: false para não dropar tabelas)
    return sequelize.sync({ force: false });
  })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Falha ao conectar ao banco de dados:', err);
  });