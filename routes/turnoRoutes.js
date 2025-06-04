const express = require('express');
const router = express.Router();
const { criarTurno, listarTurnos, finalizarTurno } = require('../controllers/turnoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.post('/', criarTurno);
router.get('/', listarTurnos);
router.put('/:id/finalizar', finalizarTurno);

module.exports = router;