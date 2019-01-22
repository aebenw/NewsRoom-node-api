const {app} = require('./../server');
const {User} = require('../models/users');

const userPost  = (req, res) => {
    const user = new User({
      name: req.body.name
    });
    user.save().then(doc => {
        res.status(200).send(doc);
    }, (e) => res.status(400).send(e));
};

module.exports = {userPost};
