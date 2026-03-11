const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/page.controller');

router.get('/',        ctrl.home);
router.get('/shop',    ctrl.shop);
router.get('/about',   ctrl.about);
router.get('/contact', ctrl.contact);
router.get('/cart',    ctrl.cart);

module.exports = router;
