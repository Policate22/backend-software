const express = require('express');
const router = express.Router();
const { criarChecklist, atualizarChecklist } = require('../controllers/checklistController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.post('/:turnoId/checklists', criarChecklist);
router.put('/checklists/:id', atualizarChecklist);

module.exports = router;