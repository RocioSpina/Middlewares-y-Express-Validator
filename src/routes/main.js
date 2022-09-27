const express = require('express');
const router = express.Router();

//controlador
const mainController = require('../controllers/mainController');
const adminController = require('../controllers/adminController');

//middleware
const adminMiddleware = require('../middlewares/adminMiddle');

//router
router.get('/', mainController.index);
router.get('/admin', adminMiddleware, adminController.admin);

module.exports = router;