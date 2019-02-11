require('./config/config')
const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express'
import session from 'express-session'



const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: "worldly", resave: false, saveUninitialized: false}))


routes(app);


app.listen(3001, () => console.log("started up on port 3001"));

module.exports = {app};
