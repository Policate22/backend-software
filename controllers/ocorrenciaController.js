const { Ocorrencia, Turno } = require('../models');

const registrarOcorrencia = async (req, res) => {
  try {
    const turno = await Turno.findOne({
      where: { id: req.params.turnoId, UserId: req.user.id }
    });
    
    if (!turno) {
      return res.status(404).send({ error: 'Turno não encontrado' });
    }
    
    const ocorrencia = await Ocorrencia.create({
      ...req.body,
      TurnoId: turno.id,
      UserId: req.user.id
    });
    
    res.status(201).send(ocorrencia);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao registrar ocorrência' });
  }
};

const listarOcorrencias = async (req, res) => {
  try {
    const ocorrencias = await Ocorrencia.findAll({
      where: { UserId: req.user.id },
      include: [Turno]
    });
    res.send(ocorrencias);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao listar ocorrências' });
  }
};

const atualizarOcorrencia = async (req, res) => {
  try {
    const ocorrencia = await Ocorrencia.findOne({
      where: { id: req.params.id, UserId: req.user.id }
    });
    
    if (!ocorrencia) {
      return res.status(404).send({ error: 'Ocorrência não encontrada' });
    }
    
    await ocorrencia.update(req.body);
    res.send(ocorrencia);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar ocorrência' });
  }
};

module.exports = { registrarOcorrencia, listarOcorrencias, atualizarOcorrencia };