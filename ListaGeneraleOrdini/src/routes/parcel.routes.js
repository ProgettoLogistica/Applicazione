const express = require('express')
const router = express.Router()
const parcelController = require('../controllers/parcel.controller');
var conn = require('../../config/db.config');

router.post('/', parcelController.create);
router.get('/', parcelController.findAll);
router.get('/:id', parcelController.findById);
router.get('/:id', parcelController.findByIdUser);
router.get('/:id', parcelController.findByIdDeliveryMan);
router.put('/:id', parcelController.update);
router.delete('/:id', parcelController.delete);

router.get('/parcels-general-list', function (req, res, next) {
    var sql = 'SELECT * FROM parcels;'
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        // render(view, localVariables, callbackFunction)
        res.render('../../views/parcels-general-list', { title: 'Parcels general list', parcelDatas: data });
    });
});

module.exports = router;