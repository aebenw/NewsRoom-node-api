import {User} from '../models';

export const authenticate = (req, res, next) => {
  var token = req.body.token;

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};
