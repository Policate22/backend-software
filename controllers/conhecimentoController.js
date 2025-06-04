const { Conhecimento } = require('../models');

const criarConhecimento = async (req, res) => {
  try {
    const conhecimento = await Conhecimento.create(req.body);
    res.status(201).send(conhecimento);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar conhecimento' });
  }
};

const listarConhecimentos = async (req, res) => {
  try {
    const conhecimentos = await Conhecimento.findAll();
    res.send(conhecimentos);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao listar conhecimentos' });
  }
};

const buscarPorTag = async (req, res) => {
  try {
    const conhecimentos = await Conhecimento.findAll({
      where: {
        tags: {
          [Sequelize.Op.contains]: [req.params.tag]
        }
      }
    });
    res.send(conhecimentos);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar por tag' });
  }
};

module.exports = { criarConhecimento, listarConhecimentos, buscarPorTag };