const mongoose = require('mongoose');
const  User  = require( '../models/userModel');



exports.addNewUser = (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    console.log('data', req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.getUserWithID = (req, res) => {
    console.log(req.params.userId)
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

exports.updateUser = (req, res) => {
    console.log(req.params.userId)
    User.findOneAndUpdate({ _id: req.params.userId}, req.body, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}

exports.deleteuser = (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted user'});
    })
}