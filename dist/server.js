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
exports.client = exports.app = void 0;

var _graph = _interopRequireDefault(require("./graph"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cors = _interopRequireDefault(require("cors"));

var _passport = _interopRequireDefault(require("passport"));

var _redis = _interopRequireDefault(require("redis"));

var _https = _interopRequireDefault(require("https"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./config/config');

const express = require('express');

const mongoose = require('./db/mongoose');

const bodyParser = require('body-parser');

const RedisStore = require('connect-redis')(_expressSession.default);

const PORT = process.env.PORT; // Promise.new(https.get("https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=pizza")
//Creat Redis Client

let client = _redis.default.createClient();

exports.client = client;
client.on('connect', () => {
  console.log('connected to Redis');
});
const app = express();
exports.app = app;

const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use((0, _cors.default)({
  "origin": "http://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204,
  credentials: true
}));
app.use((0, _expressSession.default)({
  secret: "worldly",
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    client,
    ttl: 260
  }),
  resave: true,
  saveUninitialized: false
}));
app.use(_passport.default.initialize());
app.use(_passport.default.session());
app.use(bodyParser.json());
routes(app);
app.listen(PORT || 3001, () => console.log("started up on port 3001"));