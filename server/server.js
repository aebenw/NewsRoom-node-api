require('./config/config')
const express = require('express');
const mongoose  = require('./db/mongoose');
const bodyParser = require('body-parser');
import cors from 'cors';
const PORT = process.env.PORT

// ******** FEATURES NOT READY FOR PRODUCTION
// import server from './graph'
// import redis from 'redis'
// import session from 'express-session';
// const RedisStore = require('connect-redis')(session);
// import passport from 'passport'


//Create Redis Client

// let client = redis.createClient();
// client.on('connect', () => {
//   console.log('connected to Redis')
// })

const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000',
                      'https://protected-bayou-40913.herokuapp.com'];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// app.use(session({
//   secret: "worldly",
//   store: new RedisStore({ host: 'localhost', port: 6379, client, ttl :  260}),
//   resave: true,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

app.use(bodyParser.json())

routes(app);

app.listen(PORT || 3001, () => console.log("started up on port 3001"));

export {
  app,
  // client
};
