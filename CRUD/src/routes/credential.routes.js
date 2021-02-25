const express = require('express')
const router = express.Router()
const credentialController = require('../controllers/credential.controller');

router.post('/', credentialController.create);
router.get('/', credentialController.findAll);
router.get('/:id', credentialController.findById);
router.put('/:id', credentialController.update);
router.delete('/:id', credentialController.delete);

module.exports = router;