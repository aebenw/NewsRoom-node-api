require('./config/config')
const express = require('express');
const mongoose  = require('./db/mongoose');
const bodyParser = require('body-parser');
import server from './graph'
import session from 'express-session';
const RedisStore = require('connect-redis')(session);
import cors from 'cors';
import passport from 'passport'
import redis from 'redis'
import https from 'https'
const PORT = process.env.PORT

// Promise.new(https.get("https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=pizza")


//Creat Redis Client

let client = redis.createClient();
client.on('connect', () => {
  console.log('connected to Redis')
})

const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(cors({
  "origin": "http://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204,
    credentials: true
}));

app.use(session({
  secret: "worldly",
  store: new RedisStore({ host: 'localhost', port: 6379, client, ttl :  260}),
  resave: true,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

routes(app);

app.listen(PORT || 3000, () => console.log("started up on port 3001"));

export {
  app,
  client,
  passport
};
