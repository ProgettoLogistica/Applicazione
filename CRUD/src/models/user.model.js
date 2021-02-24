'use strict';
var conn = require('../../config/db.config');

var User = function(user){
    this.ID = user.ID;
    this.last_name = user.last_name;
    this.first_name = user.first_name;
    this.address = user.address;
    this.phone = user.phone;
    this.email = user.email;
    this.userName = user.userName;
    this.password = user.password;
    this.role = user.role;
};

User.create = function (newUser, result) {
    conn.query("INSERT INTO Users set ?", newUser, function (err, res) {
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

User.findById = function (id, result) {
    conn.query("Select * from Users where ID = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    conn.query("Select * from Users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Users : ', res);
            result(null, res);
        }
    });
};

User.update = function(id, user, result){
    conn.query("UPDATE Users SET last_name=?, first_name=?, address=?, phone=?, email=?, userName=?, password=?, role=? WHERE id = ?", [user.last_name,user.first_name,user.address,user.phone,user.email,user.userName,user.password,user.role, id], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }else{
        result(null, res);
    }
    });
};

User.delete = function(id, result){
    conn.query("DELETE FROM Users WHERE id = ?", [id], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
        result(null, res);
    }
    });
};

module.exports = User;