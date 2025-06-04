const express = require('express');
const router = express.Router();
const { criarConhecimento, listarConhecimentos, buscarPorTag } = require('../controllers/conhecimentoController');

router.post('/', criarConhecimento);
router.get('/', listarConhecimentos);
router.get('/tags/:tag', buscarPorTag);

module.exports = router;