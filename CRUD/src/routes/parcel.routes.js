const express = require('express')
const router = express.Router()
const parcelController = require('../controllers/parcel.controller');

router.post('/', parcelController.create);
router.get('/', parcelController.findAll);
router.get('/:id', parcelController.findById);
router.get('/:id', parcelController.findByIdUser);
router.get('/:id', parcelController.findByIdDeliveryMan);
router.put('/:id', parcelController.update);
router.delete('/:id', parcelController.delete);

module.exports = router;