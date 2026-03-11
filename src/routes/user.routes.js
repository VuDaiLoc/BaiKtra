const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/user.controller');

router.get('/',             ctrl.getAll);
router.get('/:id',          ctrl.getById);
router.post('/register',    ctrl.register);
router.post('/login',       ctrl.login);

module.exports = router;
