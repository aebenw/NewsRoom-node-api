const mongoose = require('mongoose');
const {User} = require('../models/Users');

exports.createUser  = (req, res) => {
    const user = new User(req.body);
    user.save().then(doc => {
      console.log(JSON.stringify(doc, undefined, 2));
        res.status(200).send(doc);
    }, (e) => res.status(400).send(e));
};

exports.login = (req, res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    // console.log(user);
    res.status(200).send(user);
  });
};
