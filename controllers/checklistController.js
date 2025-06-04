const { Checklist, Turno } = require('../models');

const criarChecklist = async (req, res) => {
  try {
    const turno = await Turno.findOne({
      where: { id: req.params.turnoId, UserId: req.user.id }
    });
    
    if (!turno) {
      return res.status(404).send({ error: 'Turno não encontrado' });
    }
    
    const checklist = await Checklist.create({
      ...req.body,
      TurnoId: turno.id
    });
    
    res.status(201).send(checklist);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar checklist' });
  }
};

const atualizarChecklist = async (req, res) => {
  try {
    const checklist = await Checklist.findOne({
      where: { id: req.params.id },
      include: {
        model: Turno,
        where: { UserId: req.user.id }
      }
    });
    
    if (!checklist) {
      return res.status(404).send({ error: 'Checklist não encontrado' });
    }
    
    await checklist.update(req.body);
    res.send(checklist);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao atualizar checklist' });
  }
};

module.exports = { criarChecklist, atualizarChecklist };