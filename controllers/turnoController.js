const { Turno, User, Ocorrencia } = require('../models');

const criarTurno = async (req, res) => {
  try {
    const turno = await Turno.create({
      ...req.body,
      UserId: req.user.id
    });
    res.status(201).send(turno);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar turno' });
  }
};

const listarTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll({
      where: { UserId: req.user.id },
      include: [Ocorrencia]
    });
    res.send(turnos);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao listar turnos' });
  }
};

const finalizarTurno = async (req, res) => {
  try {
    const turno = await Turno.findOne({
      where: { id: req.params.id, UserId: req.user.id }
    });
    
    if (!turno) {
      return res.status(404).send({ error: 'Turno não encontrado' });
    }
    
    turno.status = 'finalizado';
    await turno.save();
    res.send(turno);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao finalizar turno' });
  }
};

module.exports = { criarTurno, listarTurnos, finalizarTurno };