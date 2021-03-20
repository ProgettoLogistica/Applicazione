const express = require('express')
const router = express.Router()
const credentialController = require('../controllers/credential.controller');

router.post('/create/', credentialController.create);
router.get('/all/', credentialController.findAll);
router.get('/:id', credentialController.findById);
router.put('/update/:id', credentialController.update);
router.delete('/delete/:id', credentialController.delete);

module.exports = router;