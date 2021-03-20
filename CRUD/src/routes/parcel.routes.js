const express = require('express')
const router = express.Router()
const parcelController = require('../controllers/parcel.controller');

router.post('/create/', parcelController.create);
router.get('/all/', parcelController.findAll);
router.get('/:id', parcelController.findById);
router.get('/user/:id', parcelController.findByIdUser);
router.get('/deliveryMan/:id', parcelController.findByIdDeliveryMan);
router.put('/update/:id', parcelController.update);
router.delete('/delete/:id', parcelController.delete);

module.exports = router;