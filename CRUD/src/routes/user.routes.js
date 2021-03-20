const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

router.post('/create/', userController.create);
router.get('/all/', userController.findAll);
router.get('/:id', userController.findById);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;