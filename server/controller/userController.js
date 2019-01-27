const {User} = require('../models/users');

const createUser  = (req, res) => {
    const user = new User(req.body);
    user.save().then(doc => {
      console.log(JSON.stringify(doc, undefined, 2));
        res.status(200).send(doc);
    }, (e) => res.status(400).send(e));
};

module.exports = {
  createUser
};
