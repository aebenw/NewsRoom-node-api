"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "passport", {
  enumerable: true,
  get: function () {
    return _passport.default;
  }
});
exports.app = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./config/config');

const express = require('express');

const mongoose = require('./db/mongoose');

const bodyParser = require('body-parser');

const PORT = process.env.PORT; // ******** FEATURES NOT READY FOR PRODUCTION
// import server from './graph'
// import redis from 'redis'

const RedisStore = require('connect-redis')(_expressSession.default);

//Create Redis Client
// let client = redis.createClient();
// client.on('connect', () => {
//   console.log('connected to Redis')
// })
const app = express();
exports.app = app;

const routes = require('./routes/routes');

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000', 'https://protected-bayou-40913.herokuapp.com'];
app.use((0, _cors.default)({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
})); // app.use(session({
//   secret: "worldly",
//   store: new RedisStore({ host: 'localhost', port: 6379, client, ttl :  260}),
//   resave: true,
//   saveUninitialized: false
// }))

app.use(_passport.default.initialize());
app.use(_passport.default.session());
app.use(bodyParser.json());
routes(app);
app.listen(PORT || 3001, () => console.log("started up on port 3001"));
//# sourceMappingURL=server.js.map