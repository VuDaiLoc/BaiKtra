const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/order.controller');

router.get('/',           ctrl.getAll);
router.get('/:id',        ctrl.getById);
router.post('/',          ctrl.create);
router.put('/:id/status', ctrl.updateStatus);

module.exports = router;
