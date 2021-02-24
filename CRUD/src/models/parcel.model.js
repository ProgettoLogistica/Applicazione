'use strict';
var conn = require('../../config/db.config');

var Parcel = function(parcel){
    this.ID = parcel.ID;
    this.height = parcel.height;
    this.width = parcel.width;
    this.depth = parcel.depth;
    this.weight = parcel.weight;
    this.position = parcel.position;
    this.checkInDate = parcel.checkInDate;
    this.deliveryAttempts = parcel.deliveryAttempts;
    this.priority = parcel.priority;
    this.IdUser = parcel.IdUser;
    this.idDeliveryMan = parcel.idDeliveryMan;
};

Parcel.create = function (newparcel, result) {
    conn.query("INSERT INTO Parcels set ?", newparcel, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Parcel.findById = function (id, result) {
    conn.query("Select * from Parcels where ID = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Parcel.findAll = function (result) {
    conn.query("Select * from Parcels", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Parcels : ', res);
            result(null, res);
        }
    });
};

Parcel.update = function(id, parcel, result){
    conn.query("UPDATE Parcels SET height=?, width=?, depth=?, weight=?, position=?, checkInDate=?, deliveryAttempts=?, priority=?, IdUser=?, idDeliveryMan WHERE id = ?", [parcel.height,parcel.width,parcel.depth,parcel.weight,parcel.position,parcel.checkInDate,parcel.deliveryAttempts,parcel.priority,parcel.IdUser,idDeliveryMan, id], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }else{
        result(null, res);
    }
    });
};

Parcel.delete = function(id, result){
    conn.query("DELETE FROM Parcels WHERE id = ?", [id], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
        result(null, res);
    }
    });
};

module.exports = Parcel;