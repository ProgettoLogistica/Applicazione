'use strict';
const Credential = require('../models/Credential.model');

exports.create = function (req, res) {
    const new_Credential = new Credential(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Credential.create(new_Credential, function (err, credential) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Credential added successfully!", data: credential });
        });
    }
};

exports.findById = function (req, res) {
    Credential.findById(req.params.id, function (err, credential) {
        if (err)
            res.send(err);
        res.json(credential);
    });
};

exports.findAll = function (req, res) {
    Credential.findAll(function (err, credential) {
        console.log('controller');
        if (err)
            res.send(err);
        console.log('res', credential);
        res.json(credential);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Credential.update(req.params.id, new Credential(req.body), function (err, credential) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Credential successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    Credential.delete(req.params.id, function (err, credential) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Credential successfully deleted' });
    });
};