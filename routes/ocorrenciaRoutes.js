const express = require('express');
const router = express.Router();
const { registrarOcorrencia, listarOcorrencias, atualizarOcorrencia } = require('../controllers/ocorrenciaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.post('/:turnoId/ocorrencias', registrarOcorrencia);
router.get('/ocorrencias', listarOcorrencias);
router.put('/ocorrencias/:id', atualizarOcorrencia);

module.exports = router;