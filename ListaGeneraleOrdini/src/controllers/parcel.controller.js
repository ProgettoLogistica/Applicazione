'use strict';
const Parcel = require('../models/parcel.model');

exports.create = function (req, res) {
    const new_Parcel = new Parcel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Parcel.create(new_Parcel, function (err, parcel) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Parcel added successfully!", data: parcel });
        });
    }
};

exports.findById = function (req, res) {
    Parcel.findById(req.params.id, function (err, parcel) {
        if (err)
            res.send(err);
        res.json(parcel);
    });
};

exports.findByIdUser = function (req, res) {
    Parcel.findByIdUser(req.params.id, function (err, parcel) {
        if (err)
            res.send(err);
        console.log('res', parcel);
        // res.json(parcel);
        res.status(200).render('parcels-general-list', { parcels: parcel });
    });
};

exports.findByIdDeliveryMan = function (req, res) {
    Parcel.findByIdDeliveryMan(req.params.id, function (err, parcel) {
        if (err)
            res.send(err);
        res.json(parcel);
    });
};

exports.findAll = function (req, res) {
    Parcel.findAll(function (err, parcel) {
        console.log('controller');
        if (err)
            res.send(err);
        console.log('res', parcel);
        // res.json(parcel);
        res.render('../../views/parcels-general-list', { title: 'Parcels general list', parcel: data });
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Parcel.update(req.params.id, new Parcel(req.body), function (err, parcel) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Parcel successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    Parcel.delete(req.params.id, function (err, parcel) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Parcel successfully deleted' });
    });
};