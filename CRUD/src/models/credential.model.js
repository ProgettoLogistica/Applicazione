'use strict';
var conn = require('../../config/db.config');

var Credential = function (credential) {
    this.idUser = credential.idUser;
    this.userName = credential.userName;
    this.password = credential.password;
};

Credential.create = function (newcredential, result) {
    conn.query("INSERT INTO credentials set ?", newcredential, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Credential.findById = function (idUser, result) {
    conn.query("Select * from credentials where ID = ? ", idUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Credential.findAll = function (result) {
    conn.query("Select * from credentials", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('credentials : ', res);
            result(null, res);
        }
    });
};

Credential.update = function (idUser, credential, result) {
    conn.query("UPDATE credentials SET userName=?, password=? WHERE id = ?", [credential.userName, credential.password, idUser], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Credential.delete = function (id, result) {
    conn.query("DELETE FROM credentials WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Credential;